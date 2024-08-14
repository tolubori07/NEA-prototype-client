import { CircleAlert } from 'lucide-react'

export default function Alert({
  className,
  message,
}) {
  return (
    <div
      role="alert"
      className={
        'flex items-center justify-center text-text rounded-base border-2 border-border dark:border-darkBorder bg-main py-4 sm:px-8 sm:py-5 px-4 font-heading text-sm md:text-base shadow-light dark:shadow-dark '+className}
    >
      <CircleAlert className="mr-3 md:min-h-[24px] md:min-w-[24px] min-h-[18px] min-w-[18px]" />
      {message}
    </div>
  )
}
