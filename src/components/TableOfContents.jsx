import { useState, useEffect } from 'react'
import { List } from 'lucide-react'

function TableOfContents({ content }) {
  const [activeId, setActiveId] = useState('')

  const headings = []
  const lines = content.split('\n')
  for (const line of lines) {
    const h2 = line.match(/^## (.+)/)
    const h3 = line.match(/^### (.+)/)
    if (h2) {
      const text = h2[1].trim()
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      headings.push({ level: 2, text, id })
    } else if (h3) {
      const text = h3[1].trim()
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      headings.push({ level: 3, text, id })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -70% 0px' }
    )

    const elements = document.querySelectorAll('h2[id], h3[id]')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [content])

  if (headings.length === 0) return null

  return (
    <div className="sticky top-24 w-60 shrink-0 hidden xl:block">
      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
        <List size={13} />
        Nesta página
      </div>
      <nav className="space-y-0.5">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`
              block text-sm py-1 transition-colors border-l-2
              ${heading.level === 2 ? 'pl-3' : 'pl-5'}
              ${activeId === heading.id
                ? 'text-brand-400 border-brand-500'
                : 'text-zinc-500 border-transparent hover:text-zinc-300 hover:border-zinc-600'
              }
            `}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default TableOfContents
