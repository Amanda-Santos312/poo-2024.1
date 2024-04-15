class Cliente {
    id: number;
    nome: string;

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }
}

class Conta1 {
    numero: string;
    cliente: Cliente;
    saldo: number;

    constructor(num: string, saldo: number, cliente: Cliente) {
        this.numero = num;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number) {
        if (this.saldo > valor) {
            this.saldo = this.saldo - valor;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta1, valor: number): void {
        /*this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;*/
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

function consultar(contas: Conta1[], numero: string): Conta1 {
    let contaProcurada!: Conta1;

    for (let i: number = 0; i < contas.length; i++) {
        if (contas[i].numero == numero) {
            contaProcurada = contas[i];
            break; //quando achar não precisa procurar mais;
        }
    }
    return contaProcurada;
}

/*let contas: Conta1[] = [];
console.log(contas);

let cb1: Conta1 = new Conta1("111-1", 100);
contas[0] = cb1;
console.log(contas[0]);

let cb2: Conta1 = new Conta1("222-2", 50);
contas.push(cb2);
console.log(contas[1]);*/


class Banco {
    contas: Conta1[] = [];

    inserir(conta: Conta1) {
        this.contas.push(conta);
    }

    consultar(numero: string): Conta1{
        let contaProcurada!: Conta1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break; //quando achar não precisa procurar mais;
            }
        }
        return contaProcurada;
    }

    alterar(conta: Conta1) {
        let contaProcurada: Conta1 = this.consultar(conta.numero);
        contaProcurada.saldo = conta.saldo;
        contaProcurada.cliente = conta.cliente;
    }

    consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }

    alterarPorIndice(conta: Conta1) {
        let indice: number = this.consultarPorIndice(conta.numero);

        if (indice != -1) {
            this.contas[indice] = conta;
        }
    }

    excluir(numero: string): void {
        let indice: number = this.consultarPorIndice(numero);

        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
                console.log(this.contas);
            }
            this.contas.pop();
            console.log(this.contas);
        }
    }

    sacar(numero: string, valor: number): void {
        let conta: Conta1 = this.consultar(numero);

        if (conta != null) {
            conta.sacar(valor);
        }
    }

    depositar(numero: string, valor: number): void {
        let conta: Conta1 = this.consultar(numero);

        if (conta != null) {
            conta.depositar(valor);
        }
    }

    transferir(numero: string, numeroContaDestino: string, valor: number): void {
        let contaOrigem: Conta1 = this.consultar(numero);
        let contaDestino: Conta1 = this.consultar(numeroContaDestino);

        if (contaOrigem != null && contaDestino != null) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }

    consultarSaldo(numero: string): number {
        let conta: Conta1 = this.consultar(numero);
        return conta.saldo;
    }
}

let banco: Banco = new Banco();
banco.inserir(new Conta1("111-1", 100, new Cliente(1, 'Ely')));
banco.inserir(new Conta1("222-2", 200, new Cliente(2, 'Amanda')));

console.log(banco.consultar("111-1").cliente.nome);//Ely
console.log(banco.consultar("222-2").cliente.nome);//Amanda

banco.inserir(new Conta1("333-3", 30, new Cliente(3, 'João')));
banco.inserir(new Conta1("444-4", 40, new Cliente(4, 'Maria')));

banco.transferir('111-1', '444-4', 50);

console.log(banco.consultarSaldo('111-1'));//50
console.log(banco.consultarSaldo('444-4'));//90