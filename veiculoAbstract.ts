export abstract class Veiculo {
    modelo: string;
    velocidade: number;
  
    constructor(modelo: string, velocidade: number) {
      this.modelo = modelo;
      this.velocidade = velocidade;
    }
  
    abstract acelerar(): number;
  
    static descreverVeiculo(veiculo: Veiculo): string {
      return 'O veículo é um ${veiculo.modelo} e sua velocidade é ${veiculo.velocidade} km/h.;'
    }
  }
  
  export class Carro extends Veiculo {
    constructor(modelo: string, velocidade: number) {
      super(modelo, velocidade);
    }
  
    acelerar(): number {
      return this.velocidade + 20;
    }
  }
  
  export class Caminhao extends Veiculo {
    constructor(modelo: string, velocidade: number) {
      super(modelo, velocidade);
    }
  
    acelerar(): number {
      return this.velocidade + 15;
    }
  }