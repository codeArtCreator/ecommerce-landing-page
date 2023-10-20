import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './lib/AuthProvider.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce Demo By CoderArt',
  description: 'Created by CodeArt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <AuthProvider>
            {children}
          </AuthProvider>
        </main>
      </body>
    </html>
  )
}
