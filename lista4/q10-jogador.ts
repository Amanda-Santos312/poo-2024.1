class Jogador {
    forca: number = 7;
    nivel: number = 2;
    pontosAtuais: number = 0;

    constructor(forca: number, nivel: number, pontosAtuais: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }

    calcularAtaque(): void {
        this.forca * this.nivel;
    }


    estaVivo(): boolean {
        if (this.pontosAtuais > 0) {
            return true;
        }
        return false;
    }
}