import { Inconsolata, Plus_Jakarta_Sans, Literata } from 'next/font/google'

import './globals.css'

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-console',
})

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus',
})

export const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${literata.variable} ${inconsolata.variable} ${plusJakartaSans.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
