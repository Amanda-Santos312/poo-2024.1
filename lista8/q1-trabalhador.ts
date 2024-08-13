class Empregado {
    salario: number = 500;

    constructor(salario: number) {
        this.salario = salario;
    }

    calcularSalario(salario: number): number {
        return salario;
    }
}

class Diarista extends Empregado {
    constructor(salario: number) {
        super(salario);
    }
    
    calcularSalario(salario: number): number {
        let valor = super.calcularSalario(salario) / 30;
        return valor;
    }
}

class Horista extends Diarista {
    constructor(salario: number) {
        super(salario);
    }

    calcularSalario(salario: number): number {
        let valor = super.calcularSalario(salario) / 24;
        return valor;
    }
}

let empregado: Empregado = new Empregado(500);
console.log(empregado.calcularSalario(empregado.salario));

let diarista: Diarista = new Diarista(500);
console.log(diarista.calcularSalario(diarista.salario));

let horista: Horista = new Horista(500);
console.log(horista.calcularSalario(empregado.salario))