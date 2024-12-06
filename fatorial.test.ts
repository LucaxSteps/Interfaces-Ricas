import factorial from './fatorial';

test('testa o fatorial do número -1', () => {
    expect(() => factorial(-1)).toThrowError('Fatorial não é definido para números negativos');
});

test('testa o fatorial do número 0', () => {
    expect(factorial(0)).toBe(1); 
});

test('testa o fatorial do número 1', () => {
    expect(factorial(1)).toBe(1); 
});

test('testa o fatorial do número 2', () => {
    expect(factorial(2)).toBe(2); 
});

test('testa o fatorial do número 3', () => {
    expect(factorial(3)).toBe(6); 
});

test('testa o fatorial do número 4', () => {
    expect(factorial(4)).toBe(24); 
});