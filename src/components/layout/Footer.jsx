// import useTheme from '../../hooks/useTheme';

function Footer() {
  // const { theme } = useTheme();

  return (
    <footer className="w-text font-light text-xs text-white/60">
      <p className="mb-2">
        vinvee.onrender.com is built with React and Tailwind CSS, hand-coded in VS Code and deployed with Render.
        Primary typeface is Satoshi, with DM Mono used for the project's tech stack.
      </p>
      <p>
        Overall layout design is based on Brittany Chiang's website.
      </p>
    </footer>
  )
}

export default Footer
