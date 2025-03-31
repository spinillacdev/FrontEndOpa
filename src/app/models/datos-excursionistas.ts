export interface DatosExcursionistas{
    pesoMaximo: number,
    caloriasMinimas: number,
    elementos: ElementosExcursionistas[]
}

export interface ElementosExcursionistas{
    nombre: string, 
    peso: number,
    calorias: number 
}