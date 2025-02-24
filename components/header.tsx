"use client"

import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth"
import { getAuth, signOut } from "firebase/auth"
import { useState } from "react"
import { app } from "@/lib/firebase"

export function Header() {
  const auth = getAuth(app)
  const [user, loading] = useAuthState(auth)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await signOut(auth)
      // Redirecionar para a página inicial após o logout
      window.location.href = "/"
    } catch (error) {
      console.error("Erro ao fazer logout:", error)
    }
  }

  return (
    <header className="px-4 py-6 pt-2">
      <div className="container h-full mx-auto flex flex-col gap-4 gap-y-0">
        {/* Seção do usuário */}
        {(loading || user) && (
          <div className="relative h-6 flex items-center justify-end">
            {loading ? (
              <p className="text-purple-700">Carregando...</p>
            ) : user && (
              <>
                {/* Saudação ao usuário */}
                <p className="text-purple-700  font-normal text-sm mr-4">
                  Olá, {user.displayName || user.email}!
                </p>

                {/* Botão de Hambúrguer */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-2 text-purple-700 hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>

                {/* Menu Suspenso */}
                {isMenuOpen && (
                  <div className="absolute top-8 right-0 pt-0 bg-purple-50 border border-purple-600 rounded shadow-xl z-10">
                    <ul className="py-2">
                      <li>
                        <Link
                          href="/perfil"
                          className="block px-4 py-2 text-purple-700 hover:bg-purple-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Perfil
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setIsMenuOpen(false)
                            handleLogout()
                          }}
                          className="w-full text-left px-4 py-2 text-purple-700 hover:bg-purple-200"
                        >
                          Sair
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          {/* Logo e título */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div>
              <img src="/logo.png" alt="Calculadora Modular" className="w-16 h-16" />
            </div>
            {/* Título e descrição */}
            <div className="text-left md:text-left">
              <h1 className="font-sans text-2xl text-purple-700">Calculadora Modular</h1>
              <p className="font-mono mt-2 text-sm text-purple-400">
                Ajuste dimensões para modulação em seu projeto
              </p>
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
      </div>
    </header>
  )
}