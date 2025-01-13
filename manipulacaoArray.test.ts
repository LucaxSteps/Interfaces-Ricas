import { 
    calcularQuadradoFor, 
    calcularQuadradoForEach, 
    concatenarComEspacos, 
    ordenarElementos, 
    pegarDoisPrimeiros, 
    extrairPares 
  } from './manipulacaoArray';
  
  
    test('calcular quadrado com for', () => {
      const array = [3, 5, 7, 3, 8, 9, 1];
      expect(calcularQuadradoFor(array)).toEqual([9, 25, 49, 9, 64, 81, 1]);
    });
  
    test('calcular quadrado com forEach', () => {
      const array = [3, 5, 7, 3, 8, 9, 1];
      expect(calcularQuadradoForEach(array)).toEqual([9, 25, 49, 9, 64, 81, 1]);
    });
  
    test('concatenar com espaços', () => {
      const array = ['Arrays', 'com', 'TypeScript'];
      expect(concatenarComEspacos(array)).toBe('Arrays com TypeScript');
    });
  
    test('ordenar elementos', () => {
      const array = ['carro', 'boneco', 'ave', 'lapis'];
      expect(ordenarElementos(array)).toEqual(['ave', 'boneco', 'carro', 'lapis']);
    });
  
    test('pegar dois primeiros elementos', () => {
      const array = [2, 4, 6, 2, 8, 9, 5];
      expect(pegarDoisPrimeiros(array)).toEqual([2, 4]);
    });
  
    test('extrair pares', () => {
      const array = [8, 3, 9, 5, 6, 12];
      expect(extrairPares(array)).toEqual([8, 6, 12]);
    });
  