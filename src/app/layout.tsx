import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google'
import './globals.css'
import { Container, SSRProvider } from '@/components/bootstrap'

const inter = Inter({ subsets: ['latin'] })

export const Metadata = {
  title: 'Sparkys gallery App',
  description: 'Next.js Typescript Bootstrap Gallery App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>
        <Container>
        {children}
        </Container>
        </SSRProvider>
      </body>
    </html>
  )
}
