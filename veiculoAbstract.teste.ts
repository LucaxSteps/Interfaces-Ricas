import { Carro, Caminhao, Veiculo } from './veiculoAbstract';

test('Testar método estático da classe Veiculo', () => {
  const carro = new Carro('Fusca', 50);
  const caminhao = new Caminhao('Scania', 40);

  expect(Veiculo.descreverVeiculo(carro)).toBe('O veículo é um Fusca e sua velocidade é 50 km/h.');
  expect(Veiculo.descreverVeiculo(caminhao)).toBe('O veículo é um Scania e sua velocidade é 40 km/h.');
});