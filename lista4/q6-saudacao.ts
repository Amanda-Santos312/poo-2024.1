class Saudacao {
    texto: string = "";
    destinatario: string = "";

    constructor(txt: string, dest: string) {
        this.texto = txt;
        this.destinatario = dest;
    }

    obterSaudacao(): string {
        return this.texto + this.destinatario;
    }
}

let saudacao: Saudacao = new Saudacao('Boa tarde ', 'Giovanna!');

console.log(saudacao.obterSaudacao());