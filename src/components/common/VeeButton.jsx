//

function VeeButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {

  const baseStyles = "inline-flex items-center justify-center px-4 py-1 text-base font-normal rounded-4xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: "bg-primary hover:bg-primary-bg text-text focus:ring-accent",
    outline: "bg-none border border-white hover:bg-primary-light text-text focus:ring-accent",
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      {...props}
    >
      {children}
    </button>
  )
}

export default VeeButton
