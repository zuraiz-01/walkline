/* global process */
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { catalog } from './data.js'
import { formatPrice, getPool } from './db.js'

dotenv.config()

const app = express()
const port = process.env.PORT ? Number(process.env.PORT) : 5000
const pool = getPool()

app.use(cors())
app.use(express.json())

const mapProduct = (row) => ({
  name: row.name,
  price: formatPrice(row.price),
  compareAt: formatPrice(row.compare_at),
  tag: row.tag || 'New',
  image: row.image_url,
  hoverImage: row.image_secondary_url || row.image_url,
})

const mapCategory = (row) => ({
  title: row.name,
  image: row.image_url,
  to: row.slug ? `/collections/${row.slug}` : '/collections/wallets',
})

const getCatalogFromDb = async () => {
  if (!pool) {
    return null
  }

  try {
    const next = JSON.parse(JSON.stringify(catalog))

    const [categoryRows] = await pool.query(
      'SELECT name, slug, image_url FROM categories ORDER BY sort_order, id LIMIT 8',
    )
    if (categoryRows.length) {
      next.categories = categoryRows.map(mapCategory)
    }

    const [productRows] = await pool.query(
      'SELECT name, price, compare_at, tag, image_url, image_secondary_url FROM products ORDER BY sort_order, id LIMIT 8',
    )
    if (productRows.length) {
      next.products = productRows.map(mapProduct)
    }

    const [trendingRows] = await pool.query(
      'SELECT name, price, compare_at, tag, image_url, image_secondary_url FROM products WHERE is_trending = 1 ORDER BY sort_order, id LIMIT 6',
    )
    if (trendingRows.length) {
      next.trending = trendingRows.map(mapProduct)
    }

    return next
  } catch (error) {
    console.warn('DB lookup failed, using fallback catalog.', error.message)
    return null
  }
}

app.get('/api/health', async (_req, res) => {
  res.json({ status: 'ok', db: Boolean(pool) })
})

app.get('/api/catalog', async (_req, res) => {
  const dbCatalog = await getCatalogFromDb()
  res.json(dbCatalog ?? catalog)
})

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`)
})
