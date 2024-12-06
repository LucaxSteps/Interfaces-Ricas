import factorial from './fatorial';

test('testa o fatorial do número 4', () => {
    expect(factorial(4)).toBe(24);
});

test('testa o fatorial do número 5', () => {
    expect(factorial(5)).toBe(120);
});

test('testa o fatorial do número 2', () => {
    expect(factorial(2)).toBe(2);
});
