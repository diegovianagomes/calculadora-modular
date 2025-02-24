"use client"

import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth"
import { getAuth, signOut } from "firebase/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { app } from "@/lib/firebase"

export default function ProfilePage() {
  const auth = getAuth(app)
  const [user, loading] = useAuthState(auth)

  const handleLogout = async () => {
    try {
      await signOut(auth)
      // Redirecionar para a página inicial após o logout
      window.location.href = "/"
    } catch (error) {
      console.error("Erro ao fazer logout:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-purple-700">Carregando...</p>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-purple-700">Você precisa estar logado para acessar esta página.</p>
        <Link href="/">
          <Button className="bg-purple-700 text-white hover:bg-purple-900">
            Voltar para a Página Inicial
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <Header />

      {/* Conteúdo da Página */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg border-purple-600 shadow-lg p-6">
          {/* Avatar e Informações do Usuário */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.photoURL || "/default-avatar.svg"} alt={user.displayName || "Avatar"} />
              <AvatarFallback>{user.displayName?.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold text-purple-700">{user.displayName || "Usuário"}</h1>
            <p className="text-purple-500">{user.email}</p>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col gap-4">
            <Button
              className="w-full bg-purple-700 text-white hover:bg-purple-900"
              onClick={handleLogout}
            >
              Sair
            </Button>
            <Link href="/ajuda">
              <Button className="w-full bg-gray-200 text-purple-700 hover:bg-gray-300">
                Ajuda
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}