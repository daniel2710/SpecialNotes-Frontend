import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Providers from './utils/reactQuery/Provider';
import './globals.css'

const poppins = Poppins({ style: 'normal', weight: [ '100', '200', '300', '400', '500', '700', '800'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpecialNotes',
  description: 'Generated by create next app',
  
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
