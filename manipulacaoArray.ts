export function calcularQuadradoFor(array: number[]): number[] {
    const resultado: number[] = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i] * array[i]);
    }
    return resultado;
}

export function calcularQuadradoForEach(array: number[]): number[] {
    const resultado: number[] = [];
    array.forEach(num => resultado.push(num * num));
    return resultado;
}

export function concatenarComEspacos(array: string[]): string {
    return array.join(" ");
}

export function ordenarElementos(array: string[]): string[] {
    return array.sort();
}

export function pegarDoisPrimeiros(array: number[]): number[] {
    return array.slice(0, 2);
}

export function extrairPares(array: number[]): number[] {
    return array.filter(num => num % 2 === 0);
}