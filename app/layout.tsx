import '@/styles/globals.css'
import Byline from '@/ui/byline'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  metadataBase: new URL('https://how-usestate-works.vercel.app'),
  title: {
    default: 'WTF are Callbacks?!',
    template: '%s | WTF are Callbacks?!',
  },
  description: 'A playground to explore callbacks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased [color-scheme:dark]">
      <body className="overflow-y-scroll bg-gray-1100 pb-36">
        <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
          <div className="rounded-lg bg-ht-border-gradient p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black py-2 text-center">
              <h2>WTF are Callbacks?!</h2>
            </div>
          </div>

          <div className="rounded-lg bg-ht-border-gradient p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
          </div>
          <Byline />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
