// Import npm packages
import { Routes, Route } from 'react-router-dom'

// Import pages 
import Layout from './components/layout/Layout'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import ProjectsPage from './pages/ProjectsPage';
import NotFound from './pages/NotFound';

function App() {
  // LOGIC COMPUTATION (JS)

  // TEMPLATE/OUTPUT (JSX)
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout />}>
        {/* MAIN PAGES */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<ProjectsPage />} />
        {/* ERROR 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App