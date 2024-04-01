class ContaBancariaNova {
    numero: string = "";
    saldo: number = 0;

    constructor(num: string, saldo: number) {
        this.numero = num;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo > valor ) {
            this.saldo = this.saldo - valor;
            return true;
        } else {
            return false;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: ContaBancariaNova, valor: number): boolean {
        /*this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;*/
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        } else {
            return false
        }
    }
}

let conta1: ContaBancariaNova = new ContaBancariaNova("1", 100);
let conta2: ContaBancariaNova = new ContaBancariaNova("2", 100);

console.log(conta1.consultarSaldo());//100
console.log(conta1.sacar(110));//false
console.log(conta1.transferir(conta2, 50));//true
console.log(conta2.consultarSaldo());//150
console.log(conta1.consultarSaldo());//50
console.log(conta1.transferir(conta2, 100));//false