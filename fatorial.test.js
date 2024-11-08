const fatorial = require('./fatorial');

test('testa o fatorial do número 4', () => {
    expect(fatorial(4)).toBe(24);
  });

  test('testa o fatorial do número 5', () => {
    expect(fatorial(5)).toBe(120);
  });
  
  test('testa o fatorial do número 2', () => {
    expect(fatorial(2)).toBe(2);
  });
