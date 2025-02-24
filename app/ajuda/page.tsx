"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpCircle } from "lucide-react"
import { Header } from "@/components/header"
import { useEffect, useState } from "react"

export default function HelpPage() {

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
        {/* Botão Voltar */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="font-sans text-purple-700 hover:bg-purple-300 hover:text-purple-700">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        {/* Conteúdo da Ajuda */}
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="font-sans text-4xl text-purple-700">O que é Coordenação Modular?</h1>
          
          {/* Seção Como Usar */}
          <section className="space-y-4">
            <div className="space-y-3 text-purple-700">
              <div className="rounded-lg border border-purple-200 bg-white p-4">
                <p className="mt-2 text-sm">
                A Coordenação Modular é um sistema de organização de medidas e componentes de construção baseado em um 
                módulo-base (geralmente 10 cm) para garantir a compatibilidade entre os elementos. Mascaró (1976) a 
                compara a um 'mecanismo de simplificação', evidenciando sua capacidade de simplificar processos, enquanto 
                Greven (2000) a define como a 'ordenação dos espaços', enfatizando seu papel no planejamento lógico. 
                A ABNT (Associação Brasileira de Normas Técnicas), através da norma NBR 15873, destaca seu papel na 
                industrialização, criando componentes compatíveis entre si.
                </p>
                
              </div>
              <h2 className="font-sans font-semi-bold text-xl text-purple-700">Por Que Usar a Coordenação Modular?</h2>

              {/*TODO: <img src="" alt="" className="mx-auto my-4 w-full max-w-md rounded-lg" /> */}

              <div className="rounded-lg border border-purple-200 bg-white p-4">
                <h5 className="font-sans text-base text-purple-700">Economia de Tempo e Dinheiro</h5>
                  <p className="mt-2 text-sm">
                  Projetos modulares reduzem desperdício de materiais e cortes inesperados. Como os componentes são 
                  padronizados (ex.: blocos de 20 cm ou 30 cm), você evita surpresas na obra.
                  </p>
              </div>

              <div className="rounded-lg border border-purple-200 bg-white p-4">
                <h5 className="font-sans text-base text-purple-700">Flexibilidade Criativa</h5>
                  <p className="mt-2 text-sm">
                  Parece contraditório, mas a padronização libera tempo para focar no design! Segundo Lucini (2001), a linguagem comum entre arquitetos e fabricantes facilita a comunicação, permitindo que você explore soluções inovadoras sem se perder em detalhes técnicos. Essa organização e padronização também impactam na sustentabilidade do projeto, auxiliando na redução de desperdício de materiais e otimização dos processos
                  </p>
              </div>

              <div className="rounded-lg border border-purple-200 bg-white p-4">
                <h5 className="font-sans text-base text-purple-700">Sustentabilidade</h5>
                  <p className="mt-2 text-sm">
                  O coração da Coordenação Modular é o módulo-base de 10 cm (representado por M). Ele serve como unidade 
                  de medida para tudo:
          
                    <li className="list-disc text-sm"> Multimódulos: Múltiplos de M (ex.: 3M = 30 cm para blocos cerâmicos).</li>
                    <li className="list-disc text-sm"> Submódulos: Frações de M (ex.: M/4 = 2,5 cm para ajustes finos, como 
                      espessura de reboco).</li>

                  </p>
                  <p className="mt-2 text-sm">
                  <span className="font-semibold">Curiosidade:</span> Quase todo o mundo usa o módulo de 10 cm, mas os EUA preferem 4 polegadas (≈10,16 cm). 
                  Por isso, componentes importados podem exigir atenção redobrada!
                  </p>
              </div>

              <h2 className="font-sans font-semi-bold text-xl text-purple-700">Como Aplicar na Prática: 4 Passos Essenciais</h2>

              <div className="rounded-lg border border-purple-200 bg-white p-4">
                <h5 className="font-sans text-base text-purple-700">Passo 01: Desenhe Sobre um Grid Modular</h5>
                  <p className="mt-2 text-sm">
                  Use um quadriculado de referência com linhas a cada 10 cm.
                  Esse grid guiará o posicionamento de paredes, janelas e portas.
                  <p>Use um quadriculado de referência com linhas a cada 10 cm. Esse grid guiará o posicionamento de paredes, janelas e portas. Dica: Em projetos estruturais, use quadriculados maiores (ex.: 24M para vigas), pois isso facilita o alinhamento com os elementos estruturais e a modulação dos espaços maiores.</p>
                  </p>
              </div>

              <div className="rounded-lg border border-purple-200 bg-white p-4">
                <h5 className="font-sans text-base text-purple-700">Passo 02: Escolha a Posição dos Componentes</h5>
                  <li className="list-disc text-sm"> Simétrica: Alinhe o eixo do componente com o grid (ideal para marcar eixos na obra).</li>
                  <li className="list-disc text-sm"> Assimétrica: Desloque levemente o eixo (usando submódulos para ajustes precisos).</li>
                  <li className="list-disc text-sm"> Lateral: Encoste uma face do componente no grid (comum em paredes externas).</li>
              </div>

              <div className="rounded-lg border border-purple-200 bg-white p-4">
                <h5 className="font-sans text-base text-purple-700">Passo 03: Atenção aos Ajustes Modulares</h5>
                  <li className="list-disc text-sm"> Ajuste positivo: Deixe uma folga (ex.: porta de 85 cm em um vão de 90 cm).</li>
                  <li className="list-disc text-sm"> Ajuste negativo: Permita superposição (ex.: painéis que se sobrepõem).</li>
                  <li className="list-disc text-sm"> Ajuste nulo: O componente preenche exatamente o espaço (raro, mas possível).</li>
              </div>

              <div className="rounded-lg border border-purple-200 bg-white p-4">
                <h5 className="font-sans text-base text-purple-700">Passo 04: Use Números Preferenciais</h5>
                <p className="mt-2 text-sm">São medidas padronizadas que otimizam a produção. Por exemplo: </p> 

                  <li className="list-disc text-sm"> Ajuste positivo: Deixe uma folga (ex.: porta de 85 cm em um vão de 90 cm).</li>
                  <li className="list-disc text-sm"> Ajuste negativo: Permita superposição (ex.: painéis que se sobrepõem).</li>
                  <li className="list-disc text-sm"> Ajuste nulo: O componente preenche exatamente o espaço (raro, mas possível).</li>
              </div>

              <div className="rounded-lg border border-purple-200 bg-white p-4">
                <h5 className="font-sans text-base text-purple-700">Casos Especiais: Quando a Regra Pode Ser Quebrada</h5>
                <p className="mt-2 text-sm">Nem tudo precisa ser modular! Em situações como juntas de dilatação ou blocos 
                  girados, use zonas neutras — áreas sem restrições modulares. Mas lembre-se: quanto mais zonas neutras, 
                  menor a eficiência do sistema.</p>   
              </div>


              <h2 className="font-sans font-semi-bold text-xl text-purple-700">Erros Comuns (e Como Evitá-los)</h2>        
              <div className="rounded-lg border border-purple-200 bg-white p-4">
                  <li className="list-desc text-sm"> Ignorar Tolerâncias: Sempre inclua folgas (ajustes modulares) para erros de fabricação.</li>
                  <li className="list-disc text-sm"> Misturar Sistemas de Medida: Não use polegadas e centímetros no mesmo projeto!</li>
                  <li className="list-disc text-sm"> Esquecer da Manutenção: Projete componentes que possam ser trocados facilmente.</li>
              </div>
    
            </div>
          </section>
        </div>
      </div>
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-16 right-6 z-50 bg-purple-300/20 text-purple-700 hover:bg-purple-600 hover:text-white"
        >
          <ArrowUpCircle className="h-4 w-4" />
          Topo
        </Button>
      )}
    </div>

    
  )
}