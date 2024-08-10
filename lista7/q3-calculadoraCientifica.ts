import { Calculadora2 } from './q2-calculadora';

class CalculadoraCientifica extends Calculadora2 {
    
    exponenciar(): number {
        return Math.pow(this.op1, this.op2);
    }
}

let calculo: CalculadoraCientifica = new CalculadoraCientifica(2, 3);
console.log(calculo.exponenciar()); //8