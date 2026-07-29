import { Outlet } from 'react-router';

import Header from './Header'
// import Footer from './Footer'
// import useTheme from '../../hooks/useTheme'; // Our Custom Hook

const Layout = () => {
  // const { theme } = useTheme();

  return (
    // <div className={"app " + theme}>
    <div className="min-h-screen lg:flex lg:justify-between lg:gap-4 max-w-7xl mx-auto font-display">
      <Header />
      <main className="lg:w-[52%] px-8 py-12 md:p-16 lg:py-24 lg:px-0">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
