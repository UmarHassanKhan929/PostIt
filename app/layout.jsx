import "./globals.css"
import Nav from "./auth/Nav"
// import { Roboto } from "@next/font/google"

// const robots = Roboto({
//   subsets: ["latin"],
//   variants: ["400", "500", "700"],
//   variable: "--font-roboto",
// })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`mx-4 md:mx-48 xl:mx-96`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
