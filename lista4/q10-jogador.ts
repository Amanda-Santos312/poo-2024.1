class Jogador {
    id: number;
    nome: string;
    forca: number;
    nivel: number;
    pontosAtuais: number;

    constructor(id: number, nome: string, forca: number, nivel: number, pontosAtuais: number) {
        this.id = id;
        this.nome = nome;
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    atacar(adversario: Jogador): void {
        if (adversario.estaVivo()) {
            let ataque: number = this.calcularAtaque();
            adversario.pontosAtuais -= ataque;
        }
    }

    estaVivo(): boolean {
        return this.pontosAtuais > 0;
    }

    toString(): string {
        return `Id: ${this.id} - Nome: ${this.nome} - Forca: ${this.forca} - Nivel: ${this.nivel} - Pontos: ${this.pontosAtuais}`;
    }
}

let j1: Jogador = new Jogador(1, "Arqueiro", 10, 1, 100);
let j2: Jogador = new Jogador(2, "Cavaleiro", 20, 2, 100);

j1.atacar(j2);//20*2 = 40;
j2.atacar(j1);//10*1 = 10;

console.log(j1.pontosAtuais);//60
console.log(j2.pontosAtuais);//90

j2.atacar(j1);
j2.atacar(j1);
j2.atacar(j1);
j2.atacar(j1);

console.log(j1.pontosAtuais);//-20
console.log(j1.estaVivo());//false

console.log(j1.toString());
console.log(j2.toString());