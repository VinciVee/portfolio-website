import { Outlet } from 'react-router';

import Header from './Header'
// import Footer from './Footer'
// import useTheme from '../../hooks/useTheme'; // Our Custom Hook

const Layout = () => {
  // const { theme } = useTheme();

  return (
    // <div className={"app " + theme}>
    <div className="min-h-screen flex flex-row w-layout py-[4em] mx-auto">
      <Header />
      <main className="w-1/2">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
