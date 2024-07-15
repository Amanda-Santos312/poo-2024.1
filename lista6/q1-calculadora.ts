class Calculadora {

    constructor(private operando1: number, private operando2: number){}

    soma(): number {
        return this.operando1 + this.operando2;
    }

    subtracao(): number {
        return this.operando1 - this.operando2;
    }
}

let calculadora: Calculadora = new Calculadora(2,3);
console.log(calculadora.soma());
console.log(calculadora.subtracao());

//calculadora.operando1; //é privado e somente é acessível na classe Calculadora.
//calculadora.operando2; //é privado e somente é acessível na classe Calculadora.