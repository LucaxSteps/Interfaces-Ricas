export interface Veiculo {
    modelo: string;
    velocidade: number;
    acelerar(): number;
  }
  
  export class Carro implements Veiculo {
    modelo: string;
    velocidade: number;
  
    constructor(modelo: string, velocidade: number) {
      this.modelo = modelo;
      this.velocidade = velocidade;
    }
  
    acelerar(): number {
      return this.velocidade + 15;
    }
  }
  
  export class Moto implements Veiculo {
    modelo: string;
    velocidade: number;
  
    constructor(modelo: string, velocidade: number) {
      this.modelo = modelo;
      this.velocidade = velocidade;
    }
  
    acelerar(): number {
      return this.velocidade + 20;
    }
  }