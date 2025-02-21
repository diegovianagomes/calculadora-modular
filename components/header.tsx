"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-white/50 px-4 py-6 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        {/* Título e descrição */}
        <div className="text-center md:text-left">
          <h1 className="font-pixel text-2xl text-purple-700">Calculadora Modular</h1>
          <p className="mt-2 text-sm text-purple-600">Ajuste dimensões para modulação em seu projeto</p>
        </div>

        {/* Navegação */}
        <nav className="flex gap-4">
          <Link
            href="/ajuda" 
            className="font-pixel text-purple-700 transition-colors hover:text-purple-900"
          >
            Ajuda
          </Link>
          <Link
            href="/quem-somos"
            className="font-pixel text-purple-700 transition-colors hover:text-purple-900"
          >
            Quem Somos
          </Link>
        </nav>
      </div>
    </header>
  )
}