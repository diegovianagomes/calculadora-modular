import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Calculadora Modular",
  description: "Calculadora de modulação para arquitetos",
    generator: 'Diego Viana'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-gradient-to-b from-pink-50 to-purple-50")}>{children}</body>
    </html>
  )
}



import './globals.css'