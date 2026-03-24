import { useState } from 'react'
import { Outlet, useParams, Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { Menu, Search } from 'lucide-react'
import { docsConfig } from '../config/docs'

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { slug } = useParams()
  const currentDoc = docsConfig.find((d) => d.slug === slug)

  return (
    <div className="flex min-h-screen bg-surface-0">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-10 h-16 border-b border-surface-4 bg-surface-0/90 backdrop-blur-md flex items-center px-4 gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <Menu size={20} />
          </button>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-500 min-w-0">
            <Link to="/" className="hover:text-zinc-300 transition-colors shrink-0">
              Início
            </Link>
            {currentDoc && (
              <>
                <span className="text-zinc-700">/</span>
                <span className="text-zinc-300 truncate">{currentDoc.title}</span>
              </>
            )}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 bg-surface-2 border border-surface-4 rounded-lg px-3 py-1.5 text-sm text-zinc-500 w-48 cursor-pointer hover:border-surface-3 transition-colors">
              <Search size={14} />
              <span>Buscar docs...</span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
