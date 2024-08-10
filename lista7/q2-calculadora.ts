export class Calculadora2 {
    protected _op1: number;
    protected _op2: number;

    constructor(_op1: number, _op2: number) {
        this._op1 = _op1;
        this._op2 = _op2;
    }

    soma(): number {
        return this._op1 + this._op2;
    }

    get op1(): number {
        return this._op1;
    }

    get op2(): number {
        return this._op2;
    }
}

let calc: Calculadora2 = new Calculadora2(2, 5);
console.log(calc.soma()); //7