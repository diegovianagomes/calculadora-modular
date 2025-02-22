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
    <div className="flex min-h-full flex-col">
	<Header />
	<main className="min-h-full mx-auto flex items-center justify-center p-8">
		<div className="w-full max-w-3xl">
			{/* Container das abas */}
			<div className="mb-0 flex justify-start relative">
				<div className="flex gap-1 w-full">
					<Button
						variant="ghost"
						role="tab"
						aria-selected={activeMode === "axl"}
						className={`font-sans text-purple-700 rounded-xl rounded-b-none border-2 border-b-0 border-purple-300 py-8 pt-4 relative flex-1 ${
							activeMode === "axl"
								? "bg-white hover:bg-white hover:text-purple-700"
								: "bg-purple-100 hover:bg-purple-200 hover:text-purple-700"
							}`}
						onClick={() => setActiveMode("axl")}
					>
						<span className="items-center justify-center h-full">Comprimento x Largura</span>

						{/* Conector da Aba */}
						{activeMode === "axl" && (
							<div className="absolute bottom-[-4px] left-0 right-0 h-1 bg-white z-20" />
						)}

					</Button>

					<Button
						variant="ghost"
						role="tab"
						aria-selected={activeMode === "area"}
						className={`font-sans text-purple-700 rounded-xl rounded-b-none border-2 border-b-0 border-purple-300 py-8 pt-4 relative flex-1 ${
							activeMode === "area"
								? "bg-white hover:bg-white hover:text-purple-700"
								: "bg-purple-100 hover:bg-purple-200 hover:text-purple-700"
						}`}
						onClick={() => setActiveMode("area")}
					>
						<span className="items-center justify-center h-full">Área</span>

						{/* Conector da Aba*/}
						{activeMode === "area" && (
								<div className="absolute bottom-[-4px] left-0 right-0 h-1 bg-white z-20" />
						)}

					</Button>
				</div>
			</div>

			{/* Conteúdo das abas */}
			<div className="relative z-10 rounded-xl rounded-tl-none rounded-tr-none border-2 border-purple-300 bg-white px-8 py-6 shadow-xl">
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
				<h2 className="font-pixel text-lg text-purple-700">Área Original: {(originalArea / 1e6).toFixed(2)} m²</h2>
				
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
		</div>

	</main>
	<Footer />
    </div>
  )
}