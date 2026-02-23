/* global process */
import cors from 'cors'
import express from 'express'
import { catalog } from './data.js'

const app = express()
const port = process.env.PORT ? Number(process.env.PORT) : 5000

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', mode: 'static-catalog' })
})

app.get('/api/catalog', (_req, res) => {
  res.json(catalog)
})

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`)
})
