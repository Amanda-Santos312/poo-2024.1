class Postagem {
    id: number;
    texto: string;
    qtdCurtidas: number;

    constructor(id: number, texto: string, qtdCurtidas: number) {
        this.id = id;
        this.texto = texto;
        this.qtdCurtidas = qtdCurtidas;
    }

    curtir(): void {
        this.qtdCurtidas++;
    }

    toString(): string {
        return `Postagem: ${this.texto} \n Curtidas: ${this.qtdCurtidas}`;
    }


}

class MicroBlog {
    postagens: Postagem[] = [];



    excluir(id: number) {

    }

    postagemMaisCurtida() {

    }

    curtir() {
        
    }
}

