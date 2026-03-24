import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { docsConfig, projectDocsConfig } from '../config/docs'
import CodeBlock from './CodeBlock'
import TableOfContents from './TableOfContents'
import { ChevronLeft, ChevronRight, AlertCircle, Loader2 } from 'lucide-react'

function slugifyHeading(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

function DocPage() {
  const { slug } = useParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const allDocs = [...projectDocsConfig, ...docsConfig]
  const docIndex = allDocs.findIndex((d) => d.slug === slug)
  const doc = allDocs[docIndex]
  const prev = docIndex > 0 ? allDocs[docIndex - 1] : null
  const next = docIndex < allDocs.length - 1 ? allDocs[docIndex + 1] : null

  useEffect(() => {
    if (!doc) {
      setError(true)
      setLoading(false)
      return
    }
    setLoading(true)
    setError(false)
    fetch(doc.file)
      .then((res) => {
        if (!res.ok) throw new Error('Not found')
        return res.text()
      })
      .then((text) => {
        setContent(text)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [slug, doc])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32 text-zinc-500">
        <Loader2 size={24} className="animate-spin mr-2" />
        Carregando...
      </div>
    )
  }

  if (error || !doc) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-zinc-500 gap-3">
        <AlertCircle size={32} />
        <p className="text-lg">Documentação não encontrada.</p>
        <Link to="/" className="text-brand-400 hover:text-brand-300 text-sm">
          Voltar ao início
        </Link>
      </div>
    )
  }

  return (
    <div className="flex gap-10 py-8 px-6 max-w-none">
      <article className="flex-1 min-w-0">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-surface-4">
          <div
            className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: `${doc.color}18`, color: doc.color }}
          >
            <span>{doc.title}</span>
          </div>
          <p className="text-zinc-400 text-base">{doc.description}</p>
        </div>

        {/* Markdown */}
        <div className="prose max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              pre({ children }) {
                const child = Array.isArray(children) ? children[0] : children
                const className = child?.props?.className || ''
                const codeChildren = child?.props?.children
                return <CodeBlock className={className}>{codeChildren}</CodeBlock>
              },
              code({ children, className, ...props }) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
              h2({ children }) {
                const id = slugifyHeading(children)
                return <h2 id={id}>{children}</h2>
              },
              h3({ children }) {
                const id = slugifyHeading(children)
                return <h3 id={id}>{children}</h3>
              },
              a({ href, children }) {
                const isExternal = href?.startsWith('http')
                return (
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {children}
                  </a>
                )
              },
              img({ src, alt }) {
                return (
                  <img
                    src={src}
                    alt={alt}
                    className="max-w-full rounded-lg border border-surface-4"
                  />
                )
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12 pt-6 border-t border-surface-4">
          {prev ? (
            <Link
              to={`/docs/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              <div>
                <div className="text-xs text-zinc-600 mb-0.5">Anterior</div>
                <div>{prev.title}</div>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to={`/docs/${next.slug}`}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors text-right group"
            >
              <div>
                <div className="text-xs text-zinc-600 mb-0.5">Próximo</div>
                <div>{next.title}</div>
              </div>
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </article>

      <TableOfContents content={content} />
    </div>
  )
}

export default DocPage
