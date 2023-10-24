import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar '
import Footer from '@/components/Footer ';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Games Galaxy',
  description: 'Clerk nextJs app',
  keywords: [
    'Games', 'Galaxy', 'nextJs','clerk',
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`{inter.className} bg-slate-900 text-white font-bold text-3xl` }>
       <Navbar />
       {children}
        <Footer />
        </body>
         </html>
    </ClerkProvider>
  )
}
