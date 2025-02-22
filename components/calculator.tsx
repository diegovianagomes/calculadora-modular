"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner"


interface CalculatorProps {
  onCalculate: (area: number, results: any[]) => void
}

export function Calculator({ onCalculate }: CalculatorProps) {
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [module, setModule] = useState("")

  const encontrarFormatosCandidatos = (
    largura: number,
    altura: number,
    modulo: number,
    margem = 2,
    somenteAcima = true,
  ) => {
    const areaOriginal = largura * altura
    const mInicial = largura / modulo
    const nInicial = altura / modulo

    const mMin = Math.max(1, Math.floor(mInicial) - margem)
    const mMax = Math.ceil(mInicial) + margem
    const nMin = Math.max(1, Math.floor(nInicial) - margem)
    const nMax = Math.ceil(nInicial) + margem

    const candidatos = []
    for (let m = mMin; m <= mMax; m++) {
      for (let n = nMin; n <= nMax; n++) {
        const candLargura = m * modulo
        const candAltura = n * modulo
        const candArea = candLargura * candAltura
        const diff = candArea - areaOriginal

        if (somenteAcima && candArea < areaOriginal) {
          continue
        }

        candidatos.push({
          largura: candLargura,
          altura: candAltura,
          area: candArea,
          diff: diff,
          hM: m,
          vM: n,
          formato: m === n ? "Quadrado" : "Retangular",
        })
      }
    }

    return candidatos.sort((a, b) => Math.abs(a.diff) - Math.abs(b.diff))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const widthNum = Number.parseFloat(width)
    const heightNum = Number.parseFloat(height)
    const moduleNum = Number.parseFloat(module)

    if (isNaN(widthNum) || isNaN(heightNum) || isNaN(moduleNum)) {
      toast.error("Por favor, insira valores numéricos válidos")
      return
    }

    if (widthNum <= 0 || heightNum <= 0 || moduleNum <= 0) {
      toast.error("Os valores devem ser maiores que zero")
      return
    }

    const results = encontrarFormatosCandidatos(widthNum, heightNum, moduleNum)
    onCalculate(widthNum * heightNum, results)
  }

  return (
    <TooltipProvider>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6 p-4">
		<p className="font-sans text-xs text-purple-500">Insira a largura e altura do espaço em milímetros, além do módulo base, para encontrar combinações modulares que se ajustem às dimensões exatas, minimizando desperdícios e otimizando o layout.</p>
        <div className="space-y-4">
          <div className="flex space-x-4">
            {/* Campo Largura */}
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <Label htmlFor="width" className="font-sans text-base text-purple-700">
                  Largura <span className="font-sans text-xs text-purple-500">(mm)</span>
                  {/* <p className= "font-mono text-xs text-purple-400">Adicione a Largura em milímetros</p> */}
                </Label>
                
                <Tooltip>
                  <TooltipTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 text-purple-700" 
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                      />
                    </svg>
                  </TooltipTrigger>
                  <TooltipContent className="font-sans bg-purple-400 text-white z-[9999]"> 
                    <p>Adicione a Largura em milímetros</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input
                id="width"
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="pixel-border text-purple-700 placeholder:text-purple-300 focus:border-purple-700"
                placeholder="Ex: 2500"
                required
              />
            </div>

            {/* Campo Altura */}
            <div className="space-y-2">
				<div className="flex items-center gap-1">
					<Label htmlFor="height" className="font-sans text-base text-purple-700">
						Comprimento <span className="font-sans text-xs text-purple-500">(mm)</span>
						{/*<p className= "font-mono text-xs text-purple-400">Adicione o comprimento em milímetros</p> */}
					</Label>
                
					<Tooltip>
						<TooltipTrigger>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-4 w-4 text-purple-700"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
								/>
							</svg>
						</TooltipTrigger>
						<TooltipContent className="font-sans bg-purple-400 text-white z-20 focus:border-purple-700">
							<p>Adicione o comprimento em milímetros </p>
						</TooltipContent>
					</Tooltip>
              	</div>
				
				<Input
						id="height"
						type="number"
						value={height}
						onChange={(e) => setHeight(e.target.value)}
						className="pixel-border text-purple-700 placeholder:text-purple-300 focus:border-purple-700"
						placeholder="Ex: 1250"
						required
				/>
            </div>
          </div>

          {/* Campo Módulo */}
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <Label htmlFor="module" className="font-sans text-base text-purple-700">
                Módulação <span className="font-sans text-xs text-purple-500">(mm)</span>
                {/* <p className= "font-mono text-xs text-purple-400">Adicione a dimensão da sua modulação. O layout será composto por múltiplos deste valor</p> */}	
              </Label>
              <Tooltip>
                <TooltipTrigger>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4 text-purple-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>
                  </svg>
                </TooltipTrigger>
                <TooltipContent className="font-sans bg-purple-400 text-white">
                  <p>Adicione a dimensão da sua modulação.</p>
                  <p>O layout será composto por múltiplos deste valor.</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              id="module"
              type="number"
              value={module}
              onChange={(e) => setModule(e.target.value)}
              className="pixel-border text-purple-700 placeholder:text-purple-300 focus:border-purple-700"
              placeholder="Ex: 625"
              required
            />
          </div>
        </div>
        
        <Button
          type="submit"
          className="pixel-border w-full bg-gradient-to-r from-pink-400 to-purple-400 font-sans text-lg hover:from-pink-500 hover:to-purple-500"
        >
          Calcular
        </Button>
      </form>
    </TooltipProvider>
  )
}