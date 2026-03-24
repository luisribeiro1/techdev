import { Link } from 'react-router-dom'
import { docsConfig, projectDocsConfig } from '../config/docs'
import {
  Brain, Code, Palette, Zap, Layout, Atom,
  Database, Cpu, Server, ArrowRight, BookOpen,
  FileText, ClipboardList, GitBranch, Boxes, Layers, FolderKanban
} from 'lucide-react'

const iconMap = {
  Brain, Code, Palette, Zap, Layout, Atom, Database, Cpu, Server,
  BookOpen, FileText, ClipboardList, GitBranch, Boxes, Layers,
}

function DocCard({ doc }) {
  const Icon = iconMap[doc.icon] || Code
  return (
    <Link
      to={`/docs/${doc.slug}`}
      className="group relative bg-surface-2 border border-surface-4 rounded-xl p-5 hover:border-surface-3 hover:bg-surface-3 transition-all duration-150"
    >
      {/* Order badge */}
      <div className="absolute top-4 right-4 text-xs font-mono text-zinc-600">
        #{doc.order}
      </div>

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: `${doc.color}18` }}
      >
        <Icon size={20} style={{ color: doc.color }} />
      </div>

      {/* Content */}
      <h3 className="font-display font-semibold text-white text-base mb-1">
        {doc.title}
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-4">
        {doc.description}
      </p>

      {/* CTA */}
      <div
        className="flex items-center gap-1.5 text-xs font-medium transition-colors"
        style={{ color: doc.color }}
      >
        Abrir
        <ArrowRight
          size={13}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </div>
    </Link>
  )
}

function HomePage() {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto w-full">
      {/* Hero */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-6">
          <BookOpen size={14} />
          Documentação para iniciantes
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Projeto de software<br />
          <span className="text-brand-400">linguagens e tecnologias</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Documentação técnica, exercícios e explicações simples
          para as tecnologias essenciais do desenvolvimento de sistemas.
        </p>
      </div>

      {/* Projeto de Software section */}
      <div className="flex items-center gap-3 mb-6">
        <FolderKanban size={16} className="text-amber-500" />
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
          Projeto de Software
        </h2>
        <div className="flex-1 h-px bg-surface-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {projectDocsConfig.map((doc) => (
          <DocCard key={doc.slug} doc={doc} />
        ))}
      </div>

      {/* Documentação section */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
          Ordem sugerida de estudo
        </h2>
        <div className="flex-1 h-px bg-surface-4" />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {docsConfig.map((doc) => (
          <DocCard key={doc.slug} doc={doc} />
        ))}
      </div>

      {/* Bottom info */}
      <div className="mt-10 text-center text-zinc-600 text-sm">
        {docsConfig.length + projectDocsConfig.length} documentos disponíveis &middot; Atualizado regularmente
      </div>
    </div>
  )
}

export default HomePage
