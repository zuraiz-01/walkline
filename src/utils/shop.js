export const withBase = (value) => {
  if (!value) {
    return value
  }
  if (/^(https?:\/\/|data:|blob:)/i.test(value)) {
    return value
  }
  const base = import.meta.env.BASE_URL || '/'
  if (typeof value === 'string' && value.startsWith(base)) {
    return value
  }
  if (typeof value === 'string' && value.startsWith('/assets/')) {
    return value
  }
  return `${base}${value.replace(/^\//, '')}`
}

export const productKey = (product) => product?.name ?? ''

export const slugify = (value) =>
  String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const toProductPath = (product) => `/products/${slugify(product?.name)}`

export const parseRs = (value) => {
  if (!value) {
    return 0
  }
  const raw = String(value).replace(/Rs\.?/gi, '').replace(/,/g, '').trim()
  const parsed = Number.parseFloat(raw)
  return Number.isFinite(parsed) ? parsed : 0
}

export const formatRs = (amount) => `Rs.${Number(amount || 0).toFixed(2)}`
