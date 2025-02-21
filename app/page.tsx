"use client"

import { useState } from "react"
import { Calculator } from "@/components/calculator"
import { CalculatorArea } from "../components/calculator-area"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [results, setResults] = useState<any[]>([])
  const [originalArea, setOriginalArea] = useState<number>(0)
  const [activeMode, setActiveMode] = useState<"axl" | "area">("axl")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="relative">
          
          {/* Botões de navegação */}
          <div className="mb-8 flex justify-center gap-4">
            <Button
              variant={activeMode === "axl" ? "default" : "outline"}
              className="font-pixel bg-purple-600 text-xs hover:bg-purple-700"
              onClick={() => setActiveMode("axl")}
            >
              Calculo por Comprimento x Largura
            </Button>
            
            <Button
              variant={activeMode === "area" ? "default" : "outline"}
              className="font-pixel bg-pink-600 text-xs  hover:bg-pink-700"
              onClick={() => setActiveMode("area")}
            >
              Calculo por Área Total
            </Button>
          </div>

          {/* Calculadoras */}
          {activeMode === "axl" ? (
            <Calculator
              onCalculate={(area: number, results: any[]) => {
                setOriginalArea(area)
                setResults(results)
              }}
            />
          ) : (
            <CalculatorArea
              onCalculate={(area: number, results: any[]) => {
                setOriginalArea(area)
                setResults(results)
              }}
            />
          )}
        </div>

        {/* Resultados */}
        {results.length > 0 && (
          <div className="mt-8 space-y-4">
            <h2 className="font-pixel text-lg text-purple-700">
              Área Original: {(originalArea / 1e6).toFixed(2)} m²
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="pixel-border relative overflow-hidden rounded-lg bg-white p-4 shadow-2xs transition-transform hover:scale-[1.02]"
                >
                  <div className="space-y-2">
                    <h3 className="font-pixel text-sm text-purple-600">
                      {result.formato}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Dimensões: {result.largura.toFixed(0)}mm x {result.altura.toFixed(0)}mm
                    </p>
                    <p className="text-sm text-gray-600">
                      Área: {(result.area / 1e6).toFixed(2)} m²
                    </p>
                    <p className="text-sm text-gray-600">
                      Diferença: {(result.diff / 1e6).toFixed(2)} m²
                    </p>
                    <p className="text-sm text-gray-600">
                      Módulos: {result.hM}M x {result.vM}M
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}