import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import DocPage from './components/DocPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="docs/:slug" element={<DocPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
