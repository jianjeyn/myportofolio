import "./globals.css"

export const metadata = {
  title: "Jihan Aqilah - Portfolio",
  description: "Web Developer & Designer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
