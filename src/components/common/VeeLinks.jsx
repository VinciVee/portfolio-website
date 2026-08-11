import { NavLink } from "react-router"

function VeeLinks({ to, children }) {
  const baseStyles = "inline-flex items-center justify-center px-4 py-1 text-base font-normal rounded-4xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) => (
        isActive ? `${baseStyles} `:
        isPending ? `${baseStyles} animate-pulse opacity-70 pointer-events-none`:
        `${baseStyles} bg-none border border-white hover:bg-primary-light text-text focus:ring-accent`
      )}
    >
      {children}
    </NavLink>
  )
}

export default VeeLinks
