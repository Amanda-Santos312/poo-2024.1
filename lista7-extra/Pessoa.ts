//Q2:
class Pessoa {
    
    constructor(private _nome: string = 'Amanda', private _sobrenome: string = 'Santos') {}

    get nomeCompleto(): string {
        return `${this._nome} ${this._sobrenome}`;
    }

}

let pessoa: Pessoa = new Pessoa();
console.log(pessoa.nomeCompleto);

//Q3:
class Funcionario extends Pessoa {
    private _matricula: string;
    private _salario: number;

    constructor(_matricula: string, _salario: number, _nome?: string, _sobrenome?: string) {
        super(_nome, _sobrenome);
        this._matricula = _matricula;
        this._salario = _salario;
    }

    get matricula(): string {
        return this._matricula;
    }

    get salario(): number {
        return this._salario;
    }

    calcularSalarioPrimeiraParcela(): number {
        return this._salario * 0.6;
    }

    calcularSalarioSegundaParcela(): number {
        return this._salario * 0.4;
    }
}

let funcionario: Funcionario = new Funcionario('202413', 1412);
console.log(funcionario.calcularSalarioPrimeiraParcela().toFixed(2));
console.log(funcionario.calcularSalarioSegundaParcela().toFixed(2));

//Q4:
class Professor extends Funcionario {
    private _titulacao: string;

    constructor(_titulacao: string, _matricula: string, _salario: number, _nome?: string, _sobrenome?: string) {
        super(_matricula, _salario, _nome, _sobrenome);
        this._titulacao = _titulacao;
    }

    get titulacao(): string {
        return this._titulacao;
    }

    calcularSalarioPrimeiraParcela(): number {
        let valor = super.calcularSalarioPrimeiraParcela() + super.calcularSalarioSegundaParcela();
        return valor;
    }

    calcularSalarioSegundaParcela(): number {
        return 0;
    }
}

let professor: Professor = new Professor('Mestrado', '202414', 3500);
console.log(professor.calcularSalarioPrimeiraParcela());
console.log(professor.calcularSalarioSegundaParcela());

//Q5:
class FolhaPagamento {
    private funcionarios: (Funcionario | Professor)[]; //pessoas é um array do tipo Pessoa;

    constructor(funcionarios: (Funcionario | Professor)[]) {
        this.funcionarios = funcionarios;
    }

    calcularPagamentos(): number {
        let total = 0;

        for (funcionario of this.funcionarios) {
            total += funcionario.salario
        }
        return total;
    }
}

let folha: FolhaPagamento = new FolhaPagamento([funcionario, professor]);
console.log(folha.calcularPagamentos());