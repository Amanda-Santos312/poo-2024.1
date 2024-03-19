/* Um objeto é uma instância de uma classe; 
Instanciar um objeto é alocar na memória*/

class Conta {
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

/*let conta: Conta = new Conta("111-1", 100);

conta.sacar(90);
conta.depositar(1000);
console.log(conta.numero);
console.log(conta.consultarSaldo());

let c1: Conta = new Conta("0312-1", 100);
let c2: Conta = new Conta("0312-1", 40);
c2 = c1;

console.log(c1.saldo);
console.log(c2.saldo);

c1.sacar(90);
c2.sacar(10);
console.log(c1.saldo);
console.log(c2.saldo);*/

/*function dobra(n: number): number {
    n = n * 2;
    return n;
}

let i = 10;
console.log(dobra(i));
console.log(i)*/

/*function dobraSaldo(conta: Conta): number {
    conta.saldo = conta.saldo * 2;
    return conta.saldo;
}

let c3: Conta = new Conta('333-3', 100);

console.log(dobraSaldo(c3));
console.log(c3.saldo);*/

let c4: Conta = new Conta('444-4', 100);
let c5: Conta = new Conta('555-5', 30);

c4.transferir(c5, 100); //->c5 passagem por referência

console.log(c4.saldo);
console.log(c5.saldo);