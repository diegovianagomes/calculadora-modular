"use client"

import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth"
import { getAuth } from "firebase/auth"
import { LogoutButton } from "@/components/auth/LogoutButton" 
//import { LoginButton } from "@/components/auth/LoginButton"
import { app } from "@/lib/firebase" 

export function Header() {
  const auth = getAuth(app)
  const [user, loading] = useAuthState(auth)

  return (
    <header className="px-4 py-6 pt-2">
      <div className="container h-full mx-auto flex flex-col gap-4 gap-y-0">
        {/* Seção do usuário */}
      {(loading || user) && (
        <div className="h-6 flex justify-end ">
          {loading ? (
            <p className="text-purple-700">Carregando...</p>
          ) : user && (
            <div className="flex items-center gap-3">
              <p className="text-purple-700 font-normal text-sm">
                Olá, {user.displayName || user.email}!
              </p>
              <LogoutButton />
            </div>
          )}
        </div>
      )}

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
      </div>
    </header>
  )
}