import prompt from 'prompt-sync';
import { RedeSocial } from './redeSocial'
import { Usuario } from './modelos'
import {AplicacaoError} from './excecoes'

/*Menu com as opçoes que chamam métodos.*/

class AppRedeSocial {
    private _redeSocial: RedeSocial;
    private _idUsuario = 0;
    private _input: prompt.Prompt = prompt();

    constructor () {
        this._redeSocial = new RedeSocial();
        this._input = prompt();
    }

    menu() {
        let op: string = "";

        do {
            this.listarOpcoes();
            try {
                op = this._input('Digite uma opcao: ');

                switch (op) {
                    case '1':
                        this.cadastrar();
                        break;
                }
            } catch (e) {
                if (e instanceof AplicacaoError) {
                    console.log(e.message); // "Ocorreu um erro na aplicação!"
                } else {
                    console.log("Erro desconhecido. Contate o administrador", e);
                }
                this.imprimirPressionarEnter();
            }


        } while (op != "0");
    }

    private listarOpcoes() {
        console.log('');
        console.log('1 - Cadastrar Usuario ' + 
            '2 - Listar Usuarios  ' +
            '3 - Cadastrar Publicacoes  ' +
            '4 - Adicionar Interacao' +
            '5 - Listar Publicacoes ' +
            '6 - Consultar Usuario Por Id  ' +
            '7 - Consultar Publicacao Por Id  ' +
            '  - Listar Publicacoes Por Email' +
            '8 - Listar Publicacoes Decrescente  ' +
            '9 - Contar Publicacoes Por Usuario  ' +
            '10 -  ' +
            '0 - Sair \n'
        );
    }

    private cadastrar() {
        let id: string = this._input('ID: ');
        let apelido: string = this._input('Apelido: ');
        let email: string = this._input('Email: ');
        let documento: string = this._input('Documento: ');
        let usuario: Usuario = new Usuario(this._idUsuario++, apelido,email, documento);

        this._redeSocial.inserir(usuario);
    }

    private imprimirPressionarEnter() {
        this._input("Pressione <enter>");
    }
}

export {AppRedeSocial}