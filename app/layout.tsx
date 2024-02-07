import '@/styles/globals.css';
import Byline from '@/ui/byline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'React useState',
    template: '%s | React useState',
  },
  description: 'A playground to explore how useState works in React.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased [color-scheme:dark]">
      <body className="bg-gray-1100 overflow-y-scroll pb-36">
        <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
          <div className="bg-ht-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black py-2 text-center">
              <h2>How useState works in React</h2>
            </div>
          </div>

          <div className="bg-ht-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
          </div>
          <Byline />
        </div>
      </body>
    </html>
  );
}
