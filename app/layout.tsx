import '@/app/ui/global.css';
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 dark:text-white'>
        {children}
      </body>
    </html>
  )
}
