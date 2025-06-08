import { Routes, Route } from 'react-router-dom'

// Creating a new route
import Home from "./pages/Home"
import About from "./pages/About"
import Header from './components/layout/Header'

function App() {
  // LOGIC COMPUTATION (JS)

  // TEMPLATE/OUTPUT (JSX)
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App