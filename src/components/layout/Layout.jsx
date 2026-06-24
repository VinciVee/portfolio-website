import { Outlet } from 'react-router';

import Header from './Header'
// import Footer from './Footer'
// import useTheme from '../../hooks/useTheme'; // Our Custom Hook

const Layout = () => {
  // const { theme } = useTheme();

  return (
    // <div className={"app " + theme}>
    <div className="min-h-screen lg:flex lg:justify-between lg:gap-4 max-w-7xl px-6 py-12 mx-auto font-display md:px-12 md:py-16 lg:py-24">
      <Header />
      <main className="lg:w-[52%]">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
