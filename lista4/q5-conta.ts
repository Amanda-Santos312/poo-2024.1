class ContaBancaria {
    numero: string = "";
    saldo: number = 0;

    constructor(num: string, saldo: number) {
        this.numero = num;
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        /*this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;*/

        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

let c1: Conta = new ContaBancaria("1", 100);
let c2: Conta = new ContaBancaria("2", 100);
let c3: Conta;

c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);

console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());