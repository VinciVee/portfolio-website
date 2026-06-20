// Import npm packages
import { Routes, Route } from 'react-router'

// Import pages
import Layout from './components/layout/Layout'
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  // Logic

  // output
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout />}>
        {/* MAIN PAGES */}
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} /> */}
        {/* ERROR 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
