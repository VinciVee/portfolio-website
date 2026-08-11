// import useTheme from '../../hooks/useTheme';

function Footer() {
  // const { theme } = useTheme();

  return (
    <footer className="max-w-[45ch]">
      <p className="mb-2 font-light text-xs text-text/60">
        vinvee.onrender.com is built with React and Tailwind CSS, hand-coded in VS Code and deployed with Render.
        Primary typeface is Satoshi, with DM Mono used for the project's tech stack.
      </p>
      <p className="font-light text-xs text-text/60">
        Overall layout design is based on Brittany Chiang's website.
      </p>
    </footer>
  )
}

export default Footer
