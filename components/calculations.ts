// components/calculations.ts
export interface CalculationResult {
    largura: number;
    altura: number;
    area: number;
    diff: number;
    hM: number;
    vM: number;
    formato: string;
  }
  
  // Função original do primeiro calculator
  export function encontrarFormatosCandidatos(
    largura: number,
    altura: number,
    modulo: number,
    margem = 2,
    somenteAcima = true,
    minDim = 2500
  ): CalculationResult[] {
    const areaOriginal = largura * altura;
    const mInicial = largura / modulo;
    const nInicial = altura / modulo;
  
    const mMin = Math.max(1, Math.floor(mInicial) - margem);
    const mMax = Math.ceil(mInicial) + margem;
    const nMin = Math.max(1, Math.floor(nInicial) - margem);
    const nMax = Math.ceil(nInicial) + margem;
  
    const candidatos: CalculationResult[] = [];
    
    for (let m = mMin; m <= mMax; m++) {
      for (let n = nMin; n <= nMax; n++) {
        const candLargura = Math.max(m * modulo, minDim);
        const candAltura = Math.max(n * modulo, minDim);
        const candArea = candLargura * candAltura;
        const diff = candArea - areaOriginal;
  
        if (somenteAcima && candArea < areaOriginal) continue;
  
        candidatos.push({
          largura: candLargura,
          altura: candAltura,
          area: candArea,
          diff: diff,
          hM: m,
          vM: n,
          formato: m === n ? "Quadrado" : "Retangular"
        });
      }
    }
    return candidatos.sort((a, b) => Math.abs(a.diff) - Math.abs(b.diff));
  }
  
  // Nova função baseada no script Python
  export function calcularOtimizado(
    area: number,
    modulo: number,
    margem = 2,
    razaoAspecto = 1.618,
    minDim = 2500
  ): CalculationResult[] {
    const ladoBase = Math.sqrt(area);
    const mInicial = Math.sqrt(area * razaoAspecto) / modulo;
    const nInicial = Math.sqrt(area / razaoAspecto) / modulo;
  
    const mMin = Math.max(Math.floor(mInicial) - margem, 1);
    const mMax = Math.ceil(mInicial) + margem;
    const nMin = Math.max(Math.floor(nInicial) - margem, 1);
    const nMax = Math.ceil(nInicial) + margem;
  
    const candidatos: CalculationResult[] = [];
    
    for (let m = mMin; m <= mMax; m++) {
      for (let n = nMin; n <= nMax; n++) {
        const candLargura = Math.max(m * modulo, minDim);
        const candAltura = Math.max(n * modulo, minDim);
        const candArea = candLargura * candAltura;
        const diff = candArea - area;
  
        candidatos.push({
          largura: candLargura,
          altura: candAltura,
          area: candArea,
          diff: diff,
          hM: m,
          vM: n,
          formato: (candLargura/candAltura).toFixed(2) + ':1'
        });
      }
    }
    return candidatos.sort((a, b) => Math.abs(a.diff) - Math.abs(b.diff));
  }