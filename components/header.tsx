"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="px-4 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        {/* Logo e título */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div >
            <img src="/logo.png" alt="Calculadora Modular" className="w-16 h-16" />
          </div>
          {/* Título e descrição */}
          <div className="text-left md:text-left">
            <h1 className="font-sans text-2xl text-purple-700">Calculadora Modular</h1>
            <p className="font-mono mt-2 text-sm text-purple-400">Ajuste dimensões para modulação em seu projeto</p>
          </div>
        </div>
        {/* Navegação */}
        <nav className="flex gap-8">
          <Link
            href="/ajuda" 
            className="font-sans text-purple-700 transition-colors hover:text-purple-900 hover:underline"
          >
            Ajuda
          </Link>
          <Link
            href="/quem-somos"
            className="font-sans text-purple-700 transition-colors hover:text-purple-900 hover:underline"
          >
            Quem Somos
          </Link>
        </nav>
      </div>
    </header>
  )
}