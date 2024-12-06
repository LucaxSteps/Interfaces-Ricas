import factorial from './fatorial';

test('testa o fatorial do número -1', () => {
    expect(factorial(-1)).toBe(0);
});

test('testa o fatorial do número 5', () => {
    expect(factorial(5)).toBe(120);
});

test('testa o fatorial do número 2', () => {
    expect(factorial(2)).toBe(2);
});
