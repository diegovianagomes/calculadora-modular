"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpCircle } from "lucide-react"
import { Header } from "@/components/header"
import Image from "next/image"
import { useEffect, useState } from "react"

// Dados da equipe 
const teamMembers = [
  {
    name: "Diego Viana",
    image: "/72717322.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sollicitudin faucibus. Nunc sed dolor egestas, congue nibh eu, pretium velit. Cras vitae cursus arcu. Maecenas quis tellus pulvinar lacus vehicula posuere. Cras vitae dapibus nulla. Suspendisse lacinia in nulla ut vehicula. Quisque sed justo quis nisi egestas commodo. Pellentesque scelerisque neque quis massa bibendum ultricies. Donec enim magna, convallis et dolor ac, volutpat condimentum risus. Sed bibendum lacus nec iaculis vulputate. Sed sed lorem in magna iaculis facilisis et nec diam. Aenean sit amet volutpat ligula. Aenean sapien mauris, vehicula rutrum dignissim sed, vestibulum in enim. Donec ac vehicula sapien, tempus ultrices risus. Aenean egestas a nibh quis convallis."
  },
  {
    name: "Paula Louzada",
    image: "/whisk_custom86d263cdc34d4c4194bda3352bd670d8.png",  
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sollicitudin faucibus. Nunc sed dolor egestas, congue nibh eu, pretium velit. Cras vitae cursus arcu. Maecenas quis tellus pulvinar lacus vehicula posuere. Cras vitae dapibus nulla. Suspendisse lacinia in nulla ut vehicula. Quisque sed justo quis nisi egestas commodo. Pellentesque scelerisque neque quis massa bibendum ultricies. Donec enim magna, convallis et dolor ac, volutpat condimentum risus. Sed bibendum lacus nec iaculis vulputate. Sed sed lorem in magna iaculis facilisis et nec diam. Aenean sit amet volutpat ligula. Aenean sapien mauris, vehicula rutrum dignissim sed, vestibulum in enim. Donec ac vehicula sapien, tempus ultrices risus. Aenean egestas a nibh quis convallis."
  }
]

export default function AboutUs() {

  const [showBackToTop, setShowBackToTop] = useState(false)
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowBackToTop(true)
        } else {
          setShowBackToTop(false)
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      })
    }



  return (
    <div className="min-h-screen backdrop-blur-sm">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="font-sans text-purple-700 hover:bg-purple-300 hover:text-purple-700">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="font-sans text-4xl text-purple-700">Quem Somos</h1>
          
          <div className="rounded-lg border border-purple-200 bg-white p-4">
            <p className="text-purple-700">
              Somos uma equipe especializada em soluções de modulação arquitetônica.
              Nossa calculadora foi desenvolvida para ajudar profissionais a otimizar
              espaços com precisão matemática.
            </p>
          </div>

          {/* Lista de membros da equipe */}
          {teamMembers.map((member, index) => (
            <div key={index} className="rounded-lg border border-purple-200 bg-white p-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Container da imagem */}
                <div className="w-32 h-32 rounded-full border-4 border-purple-200 overflow-hidden shrink-0">
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    width={128}
                    height={128}
                    className="object-cover aspect-square"
                    priority={index === 0}
                  />
                </div>

                {/* Texto descritivo */}
                <div className="flex-1">
                  <h3 className="font-sans text-2xl text-purple-700 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-700 text-justify leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {showBackToTop && (
            <Button
              onClick={scrollToTop}
              className="fixed bottom-16 right-6 z-50 bg-purple-300 text-purple-700 hover:bg-purple-600 hover:text-white"
            >
              <ArrowUpCircle className="mr-2 h-4 w-4" />
              Topo
            </Button>
          )}

        </div>
      </div>
    </div>
  )
}