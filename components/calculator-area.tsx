// components/calculator-area.tsx
"use client"

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
import { calcularOtimizado, CalculationResult } from "@/components/calculations"

interface CalculatorAreaProps {
  onCalculate: (area: number, results: CalculationResult[]) => void
}

export function CalculatorArea({ onCalculate }: CalculatorAreaProps) {
  const [area, setArea] = useState("")
  const [module, setModule] = useState("")
  const [aspectRatio, setAspectRatio] = useState("1.618")

  // components/calculator-area.tsx (função handleSubmit revisada)
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  console.log('Submetendo formulário...') // Depuração

  // Converter m² para mm²
  const areaNum = Number.parseFloat(area) * 1000000
  const moduleNum = Number.parseFloat(module)
  const aspectNum = Number.parseFloat(aspectRatio)

  console.log('Valores convertidos:', { areaNum, moduleNum, aspectNum }) // Depuração

  // Validações
  const errors: string[] = []

  // Verificar campos vazios
  if (!area.trim()) errors.push("❗ A área total é obrigatória")
  if (!module.trim()) errors.push("❗ O módulo é obrigatório")
  if (!aspectRatio.trim()) errors.push("❗ A proporção é obrigatória")

  // Verificar valores numéricos
  if (isNaN(areaNum)) errors.push("❌ Área deve ser um número válido")
  if (isNaN(moduleNum)) errors.push("❌ Módulo deve ser um número válido")
  if (isNaN(aspectNum)) errors.push("❌ Proporção deve ser um número válido")

  // Verificar valores positivos
  if (areaNum <= 0) errors.push("⚠️ A área deve ser maior que zero")
  if (moduleNum <= 0) errors.push("⚠️ O módulo deve ser maior que zero")
  if (aspectNum <= 0) errors.push("⚠️ A proporção deve ser maior que zero")

  //console.log('Erros encontrados:', errors) // Depuração

  if (errors.length > 0) {
    toast.error(
      <div className="space-y-2 p-2">
        <h4 className="font-pixel text-sm text-red-100">Problemas encontrados:</h4>
        <ul className="list-disc pl-4">
          {errors.map((error, index) => (
            <li key={index} className="text-xs text-red-50">{error}</li>
          ))}
        </ul>
      </div>,
      { 
        duration: 10000,
        position: 'top-center',
        style: {
          backgroundColor: '#6D28D9',
          border: '2px solid #9333EA'
        }
      }
    )
    return
  }

  //console.log('Calculando resultados...') // Depuração
  const results = calcularOtimizado(areaNum, moduleNum, 3, aspectNum)
  onCalculate(areaNum, results)
}

  return (
    <TooltipProvider>
    	<form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6 p-4">
		<p className="font-sans text-xs text-purple-500">Informe a área total em metros quadrados, o módulo base e uma proporção desejada para gerar layouts flexíveis que respeitem a modulação.</p>
        <div className="space-y-4">
          {/* Campo Área Total */}
          	<div className="space-y-2">
				<div className="flex items-center gap-1">
					<Label htmlFor="area" className="font-sans text-base text-purple-700">
						Área <span className="font-sans text-xs text-purple-500">(m)</span>
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
						<TooltipContent className="font-sans bg-purple-400 text-white">
							<p>Área total do espaço em metros quadrados</p>
						</TooltipContent>
					</Tooltip>
				</div>

				<Input
					id="area"
					type="number"
					step="0.01"
					value={area}
					onChange={(e) => setArea(e.target.value)}
					className="pixel-border text-purple-700 placeholder:text-purple-300 focus:border-purple-700"
					placeholder="Ex: 150"
					required
				/>
          	</div>

          	<div className="grid grid-cols-2 gap-4">
            {/* Campo Módulo */}
            <div className="space-y-2">
				<div className="flex items-center gap-1">
					<Label htmlFor="module" className="font-sans text-base text-purple-700">
						Modulação <span className="font-sans text-xs text-purple-500">(mm)</span>
						
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

            {/* Campo Proporção */}
            <div className="space-y-2">
				<div className="flex items-stretch gap-1">
					<Label htmlFor="aspect" className="font-sans text-base text-purple-700">
						Proporção 
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
					<TooltipContent className="font-sans bg-purple-400 text-white">
						<p>Relação ideal entre largura e altura</p>
						<p>(ex: 1.618 - Proporção Áurea)</p>
					</TooltipContent>
					</Tooltip>
				</div>

				<Input
					id="aspect"
					type="number"
					step="0.01"
					value={aspectRatio}
					onChange={(e) => setAspectRatio(e.target.value)}
					className="pixel-border text-purple-700 placeholder:text-purple-300 focus:border-purple-700"
					placeholder="Ex: 1.618"
					required
				/>
            </div>
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