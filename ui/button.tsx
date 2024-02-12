import clsx from 'clsx'
import { Ping } from './ping'

export default function Button({
  variant = 'default',
  focus = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'pink'
  focus?: boolean
}) {
  return (
    <span className="relative inline-flex">
      <button
        className={clsx(
          'mt-3 inline-flex items-center rounded-md bg-slate-800 px-12 py-2 text-sm font-semibold leading-6 shadow ring-1 ring-slate-200/20 transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-70',
          {
            'text-blue-400 hover:text-blue-300': variant === 'default',
            'text-pink-500 hover:text-pink-400': variant === 'pink',
          },
        )}
        {...props}
      />
      {focus && <Ping />}
    </span>
  )
}
