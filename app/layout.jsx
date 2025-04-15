import "./globals.css"

export const metadata = {
  title: "Rebirth Labs - Science-Driven Skincare",
  description: "Minimalist skincare solutions that blend advanced dermatological science with elegant user experience.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans antialiased">{children}</body>
    </html>
  )
}


import './globals.css'