"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { calcularOtimizado, CalculationResult } from "@/components/calculations"

interface CalculatorOtimizadoProps {
  onCalculate: (results: CalculationResult[]) => void
}

export function CalculatorOtimizado({ onCalculate }: CalculatorOtimizadoProps) {
  const [area, setArea] = useState("")
  const [modulo, setModulo] = useState("")
  const [razao, setRazao] = useState("1.618")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const areaNum = parseFloat(area) * 1e6 // Convert m² to mm²
    const moduloNum = parseFloat(modulo)
    const razaoNum = parseFloat(razao)

    if ([areaNum, moduloNum, razaoNum].some(isNaN)) {
      toast.error("Valores inválidos")
      return
    }

    const results = calcularOtimizado(areaNum, moduloNum, 3, razaoNum)
    onCalculate(results)
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="area" className="font-pixel text-sm text-purple-700">
              Área (m²)
            </Label>
            <Input
              id="area"
              type="number"
              step="0.01"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="pixel-border"
              placeholder="Ex: 150"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modulo" className="font-pixel text-sm text-purple-700">
              Módulo (mm)
            </Label>
            <Input
              id="modulo"
              type="number"
              value={modulo}
              onChange={(e) => setModulo(e.target.value)}
              className="pixel-border"
              placeholder="Ex: 625"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="razao" className="font-pixel text-sm text-purple-700">
            Razão de Aspecto
          </Label>
          <Input
            id="razao"
            type="number"
            step="0.01"
            value={razao}
            onChange={(e) => setRazao(e.target.value)}
            className="pixel-border"
            placeholder="Ex: 1.618"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        className="pixel-border w-full bg-gradient-to-r from-green-400 to-purple-400 font-pixel text-sm hover:from-green-500 hover:to-purple-500"
      >
        Calcular Versão Otimizada
      </Button>
    </form>
  )
}