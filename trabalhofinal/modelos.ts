/*import {} from './excecoes';*/

class Usuario {
    private _id: number;
    private _email: string;
    private _documento: string;

    constructor(id: number, email: string, documento: string) {
        this._id = id;
        this._email = email;
        this._documento = documento;
    }

    get id(): number {
        return this._id;
    }

    get email(): string {
        return this._email;
    }

    get documento(): string {
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

    get id(): number {
        return this._id;
    }

    get usuario(): Usuario {
        return this._usuario;
    }

    get conteudo(): string {
        return this._conteudo;
    }

    get dataHora(): Date {
        return this._dataHora;
    }


    
}

enum TipoInteracao {
    Curtir,
    NaoCurtir,
    Riso,
    Surpresa,
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

    get id(): number {
        return this._id;
    }

    get publicacao(): Publicacao {
        return this._publicacao;
    }

    get tipoInteracao(): TipoInteracao {
        return this._tipoInteracao;
    }

    get usuario(): Usuario {
        return this._usuario;
    }

    get dataHora(): Date {
        return this._dataHora;
    }



}

class PublicacaoAvancada extends Publicacao {
    private _interacoes: TipoInteracao[] = [];

    constructor(id: number, usuario: Usuario, conteudo: string, dataHora: Date) {
        super(id, usuario, conteudo, dataHora);
        this._interacoes = [];
    }

    adicionarInteracao(interacao: TipoInteracao) {
        this._interacoes.push(interacao);
    }

}


export {Usuario, Publicacao, TipoInteracao, Interacao, PublicacaoAvancada}