class Usuario {
    private _id: number;
    private _apelido: string;
    private _email: string;
    private _documento: string;

    constructor(id: number, nome: string, email: string, senha: string) {
        this._id = id;
        this._apelido = nome;
        this._email = email;
        this._documento = senha;
    }

    getId(): number {
        return this._id;
    }

    getApelido(): string {
        return this._apelido;
    }

    getEmail(): string {
        return this._email;
    }

    get_documento(): string {
        return this._documento;
    }

}

class Publicacao {
    private _id: number;
    private _usuario: Usuario;
    private _conteudo: string;
    private _dataHora: Date;

    constructor(id: number, usuario: Usuario, conteudo: string, dataHora: Date) {
        this._id = id;
        this._usuario = usuario;
        this._conteudo = conteudo;
        this._dataHora = dataHora;
    }

    getId(): number {
        return this._id;
    }

    getUsuario(): Usuario {
        return this._usuario;
    }

    getConteudo(): string {
        return this._conteudo;
    }

    getDataHora(): Date {
        return this._dataHora;
    }

}

enum TipoInteracao {
    curtir,
    naoCurtir,
    riso,
    surpresa,
    triste,
    raiva
}

class Interacao {
    private _id: number;
    private _publicacao: Publicacao;
    private _tipoInteracao: TipoInteracao;
    private _usuario: Usuario;
    private _dataHora: Date;

    constructor(id: number, publicacao: Publicacao, tipoInteracao: TipoInteracao, usuario: Usuario, dataHora: Date) {
        this._id = id;
        this._publicacao = publicacao;
        this._tipoInteracao = tipoInteracao;
        this._usuario = usuario;
        this._dataHora = dataHora;
    }

    getId(): number {
        return this._id;
    }

    getPublicacao(): Publicacao {
        return this._publicacao;
    }

    getTipoInteracao(): TipoInteracao {
        return this._tipoInteracao;
    }

    getUsuario(): Usuario {
        return this._usuario;
    }

    getDataHora(): Date {
        return this._dataHora;
    }
}

class PublicacaoAvancada extends Publicacao {
    interacoes: Interacao[] = [];

    getInteracoes(): Interacao[] {
        return this.interacoes;
    }


    usuarioJaInteragiu(usuario: Usuario): boolean {
        for (let i = 0; i < this.interacoes.length; i++) {
            if (this.interacoes[i].getUsuario().getId() === usuario.getId()) {
                return true;
            }
        }
        return false;
    }
    // Método para reagir, com a verificação embutida
    reagir(interacao: Interacao): string {
        if (this.usuarioJaInteragiu(interacao.getUsuario())) {
            return "O usuário já interagiu com esta publicação.";
        }
        
        this.interacoes.push(interacao);
            return "Interação adicionada com sucesso.";
    }
}

//TESTES DA PARTE1:
/*1.a*/
let usuario1 = new Usuario(1, "João", "joao@email.com", "123456");
let usuario2 = new Usuario(2, "Maria", "maria@email.com", "678910");
let usuario3 = new Usuario(1, "Maria", "maria@email.com", "678910");
/*console.log(usuario1)*/

/*1.b*/
let publicacao1 = new PublicacaoAvancada(1, usuario1, "Olá, mundo!", new Date("2021-10-01T15:00"));
let publicacao2 = new PublicacaoAvancada(2, usuario2, "Hello, world!", new Date("2021-10-02T23:34"));
let publicacao3 = new PublicacaoAvancada(2, usuario2, "Hello, world!", new Date("2021-10-02T06:30"));
let publicacao4 = new PublicacaoAvancada(3, usuario1, "Aula de POO", new Date("2021-10-03T08:50"));
let publicacao5 = new PublicacaoAvancada(4, usuario1, "Sabadouu", new Date("2024-09-14T12:45"));
/*console.log(publicacao1)*/

/*1.d*/
let interacao1 = new Interacao(1, publicacao1, TipoInteracao.curtir, usuario2, new Date("2021-10-03T12:40"));
let interacao2 = new Interacao(2, publicacao2, TipoInteracao.naoCurtir, usuario1, new Date("2021-10-04T17:55"));
/*console.log(interacao1)


/*2.a*/
/*let redeSocial = new RedeSocial();
redeSocial.adicionarUsuario(usuario1)
redeSocial.adicionarUsuario(usuario2)

redeSocial.adicionarPublicacao(publicacao1);
redeSocial.adicionarPublicacao(publicacao2);
redeSocial.adicionarPublicacao(publicacao4);
redeSocial.adicionarPublicacao(publicacao5);


/*2.b TESTES DE ERROS:*/
/*redeSocial.adicionarUsuario(usuario3) /*VAI DAR ERROR */
/*redeSocial.adicionarPublicacao(publicacao3);/* VAI DAR ERROR*/

/*publicacao1.interacoes.push(interacao1);
publicacao2.interacoes.push(interacao2);*/


/*redeSocial.listarUsuarios();*/
/*redeSocial.listarPublicacoes();*/

/*2.c*/
/*redeSocial.listarPublicacoesDecrescente();*/
/*2.d*/
/*redeSocial.exibirPublicacoesPorUsuario("joao@email.com");*/

/*2.e*/
/*console.log(publicacao1.reagir(interacao1));*/

/*3*/
/*console.log(redeSocial.consultarUsuarioPorId(4)); /*OK*/
/*console.log(redeSocial.consultarPublicacaoPorId(6)); /*OK*/
/*console.log(redeSocial.contarPublicacoesPorUsuario(usuario1));*/

export { Usuario, Publicacao, TipoInteracao, Interacao, PublicacaoAvancada }