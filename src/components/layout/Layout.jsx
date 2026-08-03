import { Outlet } from 'react-router';
import Header from './Header'
import Footer from './Footer'


const Layout = () => {

  return (
    <div className="min-h-screen lg:flex lg:justify-between lg:gap-16 max-w-7xl mx-auto px-8 md:px-12 py-16 lg:py-0 font-display">
      <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-[45%] pb-20 lg:py-24 lg:flex lg:flex-col lg:justify-between">
        <Header />
      </header>
      <main className="lg:w-[52%] lg:py-24">
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}

export default Layout
