import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

function extractText(node) {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (node?.props?.children) return extractText(node.props.children)
  return ''
}

function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false)

  const plainText = extractText(children).replace(/\n$/, '')
  const language = className?.match(/language-(\w+)/)?.[1] || ''

  const handleCopy = () => {
    navigator.clipboard.writeText(plainText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className="flex items-center justify-between bg-surface-3 px-4 py-2 rounded-t-lg border border-surface-4 border-b-0">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
          {language || 'code'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          {copied ? (
            <>
              <Check size={13} className="text-brand-400" />
              <span className="text-brand-400">Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      <div className="rounded-b-lg overflow-hidden border border-surface-4 border-t-0">
        <pre className="!rounded-none !border-0 !m-0">
          <code className={className}>{children}</code>
        </pre>
      </div>
    </div>
  )
}

export default CodeBlock
