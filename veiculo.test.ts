import { Carro, Moto } from './veiculo';

test('Testar aceleração dos veículos', () => {
  const carro = new Carro('Fusca', 50);
  expect(carro.acelerar()).toBe(65);

  const moto = new Moto('Honda', 60);
  expect(moto.acelerar()).toBe(80);
});