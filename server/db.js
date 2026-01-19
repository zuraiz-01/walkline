/* global process */
import mysql from 'mysql2/promise'

export const getPool = () => {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env

  if (!DB_HOST || !DB_USER || !DB_NAME) {
    return null
  }

  return mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD ?? '',
    database: DB_NAME,
    port: DB_PORT ? Number(DB_PORT) : 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
}

export const formatPrice = (value) => {
  if (value === null || value === undefined) {
    return null
  }
  if (typeof value === 'number') {
    return `Rs.${value.toFixed(2)}`
  }
  return String(value)
}
