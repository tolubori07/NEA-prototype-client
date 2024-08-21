export default function Input({
  className,
  placeholder,
  type,
  onChange,
  value,
  name,
  min,
  max
}) {
  return (
    <input
      className={
        'rounded-base bg-white  border-2 border-border dark:border-darkBorder p-[10px] font-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none ' + className}
      type={type}
      name={name}
      min={min}
      max={max}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      aria-label={placeholder}
    />
  )
}
