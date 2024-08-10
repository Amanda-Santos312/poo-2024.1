class Veiculo {
    placa: string;
    ano: number;

    constructor(placa: string,ano: number) {
        this.placa = placa;
        this.ano = ano;
    }
}

class Carro extends Veiculo {
    modelo: string;

    constructor(placa: string, ano: number, modelo: string) {
        super(placa, ano);
        this.modelo = modelo;
    }
}

class CarroEletrico extends Carro {
    autonomiaBateria: number;

    constructor(placa: string, ano: number, modelo:string, autonomiaBateria:number) {
        super(placa, ano, modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
}

let ce: CarroEletrico = new CarroEletrico('pix-0800', 2023, 'kwid', 480);
console.log(ce.placa);
console.log(ce.ano);
console.log(ce.modelo);
console.log(ce.autonomiaBateria);