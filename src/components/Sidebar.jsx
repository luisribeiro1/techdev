import { NavLink, Link } from 'react-router-dom'
import { docsConfig, projectDocsConfig } from '../config/docs'
import {
  Brain, Code, Palette, Zap, Layout, Atom,
  Database, Cpu, Server, Home, X,
  BookOpen, FileText, ClipboardList, GitBranch, Boxes, Layers, FolderKanban
} from 'lucide-react'

const iconMap = {
  Brain, Code, Palette, Zap, Layout, Atom, Database, Cpu, Server,
  BookOpen, FileText, ClipboardList, GitBranch, Boxes, Layers,
}

function NavItem({ doc, onClose }) {
  const Icon = iconMap[doc.icon] || Code
  return (
    <NavLink
      key={doc.slug}
      to={`/docs/${doc.slug}`}
      onClick={onClose}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
          isActive
            ? 'bg-surface-3 text-white'
            : 'text-zinc-400 hover:text-zinc-200 hover:bg-surface-3'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            size={16}
            style={{ color: isActive ? doc.color : undefined }}
            className={!isActive ? 'text-zinc-600' : ''}
          />
          <span>{doc.title}</span>
          {isActive && (
            <div
              className="ml-auto w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: doc.color }}
            />
          )}
        </>
      )}
    </NavLink>
  )
}

function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Backdrop (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-surface-1 border-r border-surface-4 z-30
          flex flex-col transition-transform duration-200
          lg:sticky lg:top-0 lg:translate-x-0 lg:h-screen lg:shrink-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-surface-4 shrink-0">
          <Link to="/" className="flex items-center gap-2" onClick={onClose}>
            <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs font-display">T</span>
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight">
              tech<span className="text-brand-400">dev</span>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Home link */}
        <div className="px-3 pt-4 pb-2">
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-zinc-200 hover:bg-surface-3 transition-colors"
          >
            <Home size={16} />
            Início
          </Link>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-3 pb-4 space-y-0.5">

          {/* Projeto de Software group */}
          <div className="mb-1">
            <div className="flex items-center gap-2 px-3 py-2">
              <FolderKanban size={14} className="text-amber-500/70" />
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Projeto de Software
              </span>
            </div>
            <div className="ml-3 pl-3 border-l border-surface-4 space-y-0.5">
              {projectDocsConfig.map((doc) => (
                <NavItem key={doc.slug} doc={doc} onClose={onClose} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="py-2">
            <div className="h-px bg-surface-4" />
          </div>

          {/* Documentação section */}
          <div className="px-3 py-2">
            <span className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">
              Documentação
            </span>
          </div>

          {docsConfig.map((doc) => (
            <NavItem key={doc.slug} doc={doc} onClose={onClose} />
          ))}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-surface-4 shrink-0">
          <p className="text-xs text-zinc-600">
            Documentação para iniciantes em programação
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
