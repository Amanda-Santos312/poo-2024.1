import prompt from 'prompt-sync';
import * as fs from 'fs';
import { RedeSocial } from './redeSocial'

/*Menu com as opçoes que chamam métodos.*/

class AppRedeSocial {
    private _redeSocial: RedeSocial;
    private _idUsuario = 0;
    private caminho_arquivo = "./lista.txt"
    private _input: prompt.Prompt = prompt()

    constructor () {
        this._redeSocial = new RedeSocial();
        this._input = prompt();
    }

    menu() {
        let op: string = "";

        do {
            this.listarOpcoes();

        } while (op != "0");
    }

    private listarOpcoes() {
        console.log('');
        console.log(
            '1 -   \n' + 
            '2 -    \n' +
            '3 -   \n' +
            '4 -   \n' +
            '5 -   \n' +
            '6 -   \n' +
            '7 -   \n' +
            '8 -   \n' +
            '0 - Sair \n'
        );
    }
} 