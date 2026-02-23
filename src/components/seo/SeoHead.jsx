import { useEffect } from 'react'

const setMetaTag = (name, content) => {
  if (!content) {
    return
  }
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const SeoHead = ({ title, description, faqSchema, structuredData }) => {
  const payload = structuredData ?? faqSchema
  const serializedSchema = payload ? JSON.stringify(payload) : ''

  useEffect(() => {
    if (title) {
      document.title = title
    }
    setMetaTag('description', description)

    const schemaId = 'walkline-structured-data'
    const previous = document.getElementById(schemaId)
    if (previous) {
      previous.remove()
    }

    if (serializedSchema) {
      const script = document.createElement('script')
      script.id = schemaId
      script.type = 'application/ld+json'
      script.text = serializedSchema
      document.head.appendChild(script)
    }

    return () => {
      const existing = document.getElementById(schemaId)
      if (existing) {
        existing.remove()
      }
    }
  }, [title, description, serializedSchema])

  return null
}

export default SeoHead
