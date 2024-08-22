
const Button = ({children,className,onClick,type})=> {
  return (
    <button
      role="button"
      aria-label="Click to perform an action"
      type={type}
      onClick={onClick}
      className={
        'flex text-text cursor-pointer  items-center rounded-base border-2 border-border dark:border-darkBorder bg-main px-4 py-2 text-sm font-base font-body shadow-light dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none '+className}
    >
      {children}
    </button>
  )
}

export default Button
