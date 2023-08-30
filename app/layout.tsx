"use client"
import { Poppins } from 'next/font/google';
import Providers from './utils/reactQuery/Provider';
import './globals.css'
import { SidebarContextProvider } from './context/UI/sidebar';
import { useEffect } from 'react';

const poppins = Poppins({ style: 'normal', weight: [ '100', '200', '300', '400', '500', '700', '800'], subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'SpecialNotes',
//   description: 'Application created by the developer Daniel De Avila, all rights reserved',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(()=>{
    console.log(`%cStop! This feature is only for Special Notes developers and any hacking attempt will be detected as fraud.`, 'background: #171a21; color: white; padding: 50px; border-radius: 5px; font-size: 32px; width: 100%');
    console.log(`%cAll rights reserved - 2023 (Daniel De Avila).`, 'background: #171a21; color: white; padding: 30px; border-radius: 5px; font-size: 28px; width: 100%');
  }, [])

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <SidebarContextProvider>
            {children}
          </SidebarContextProvider>
        </Providers>
      </body>
    </html>
  )
}
