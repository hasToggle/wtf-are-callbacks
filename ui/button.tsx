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
          'mt-3 inline-flex items-center rounded-md bg-slate-800 px-12 py-2 text-sm font-semibold leading-6 shadow-lg ring-1 ring-slate-200/20 transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-70',
          {
            'text-blue-400 shadow-blue-950/10 hover:text-blue-300 disabled:hover:text-blue-400':
              variant === 'default',
            'text-pink-500 shadow-pink-950/10 hover:text-pink-400 disabled:hover:text-pink-500':
              variant === 'pink',
          },
        )}
        {...props}
      />
      {focus && <Ping />}
    </span>
  )
}
