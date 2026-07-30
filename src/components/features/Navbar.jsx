import { useEffect, useState } from "react"
import { NavLink } from "react-router"

function Navbar() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    // Constructor
    const observerOptions = {
      root: null, // watch interaction relative to viewport
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    const sectionIds = ["about", "projects", "experience"]
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])


  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="flex flex-col justify-around items-start text-lg space-x-6 py-6 *hover:underline">
        <li>
          <NavLink
            to="#about"
            className={ activeSection === "about" ? "underline text-accent-light" : "no-underline text-white/70" }
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#projects"
            className={ activeSection === "projects" ? "underline text-accent-light" : "no-underline text-white/70" }
          >
            projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#experience"
            className={ activeSection === "experience" ? "underline text-accent-light" : "no-underline text-white/70" }
          >
            resume
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
