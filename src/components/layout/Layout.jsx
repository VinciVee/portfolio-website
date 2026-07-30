import { Outlet } from 'react-router';
import Header from './Header'
import Footer from './Footer'


const Layout = () => {

  return (
    <div className="min-h-screen lg:flex lg:justify-between lg:gap-4 max-w-7xl mx-auto font-display">
      <Header />
      <div className="lg:w-[52%] px-8 py-12 md:p-16 lg:py-24 lg:pl-0 lg:pr-16">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
