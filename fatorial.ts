function factorial(n: number): number {
    let result: number = n;
    if (n === 0 || n === 1) {
        return 1;
    }
    if (n < 0) {
        throw new Error('Fatorial não é definido para números negativos');
    }
    
    while (n > 1) {
        n--;
        result *= n;
    }
    return result;
}

export default factorial;