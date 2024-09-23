import prompt from 'prompt-sync';
import { RedeSocial } from './redeSocial'
import { Usuario, Publicacao, Interacao, TipoInteracao, PublicacaoAvancada} from './modelos'
import {AplicacaoError, UsuarioExistenteError, UsuarioInexistenteError, PublicacaoExistenteError, PublicacaoInexistenteError, InteracaoExistenteError, EmailExistenteError} from './excecoes'


class AppRedeSocial {
    private _redeSocial: RedeSocial;
    private _idUsuario = 1;
    private _idPublicacao = 1;
    private _idInteracao = 1;
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
                        this.cadastrarUsuario(); //OK
                        break;   
                    case '2':
                        this._redeSocial.listarUsuarios(); //OK
                        break;
                    case '3':
                        this.cadastrarPublicacao(); //OK
                        break;
                    case '4':
                        this.adicionarInteracao();
                        break;
                    case '5':
                        this._redeSocial.listarPublicacoes(); //OK
                        break;    
                    case '6':
                        this._redeSocial.listarPublicacoesDecrescente(); //OK
                        break;   
                    case '7':
                        this.buscarPublicacoesPorEmail();   
                        break;
                    case '8':
                        this.consultarUsuarioPorId();
                        break;
                    case '9':
                        this.consultarPublicacaoPorId();
                        break;
                    case '10':
                        this.exibirContagemPublicacoes();
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
        console.log('\n📲 Bem Vindo(a) a sua Rede Social!📲');
        console.log('\n1 - Cadastrar Usuario👤\n' + 
            '2 - Listar Usuarios 🔎\n' +
            '3 - Cadastrar Publicacoes 📰\n' +
            '4 - Adicionar Interacao 👥\n' +
            '5 - Listar Publicacoes 🔎\n' +
            '6 - Listar Publicacoes Decrescente 🔎\n' +
            '7 - Listar Publicacoes Por Email 🔎\n' +
            '\n******** Funcionalidades Adicionais ******** \n' +
            '8 - Consultar Usuario Por Id  🔎\n' +
            '9 - Consultar Publicacao Por Id  🔎\n' +
            '10 - Contar Publicacoes Por Usuario ➕\n' +
            '\n0 - Sair ❌\n'
        );
    }

    cadastrarUsuario() {
        let idInput: string = this._input('ID: ');
        let id: number = parseInt(idInput);

        if (this._redeSocial.consultar(id)) {
            throw new UsuarioExistenteError('ID já existe!');
        }

        let apelido: string = this._input('Apelido: ');
        let email: string = this._input('Email: ');

        if (this._redeSocial.validarEmail(email)) {
            throw new EmailExistenteError('Email inválido!');
        }

        let documento: string = this._input('Documento: ');
        let usuario: Usuario = new Usuario(id, apelido, email, documento);

        try {
            this._redeSocial.adicionarUsuario(usuario);
        } catch (e) {
            if (e instanceof UsuarioExistenteError) {
                console.log(e.message);
            } else {
                console.log('Erro ao adicionar usuario')
            }
        }
    }

    cadastrarPublicacao(): void {
        let tipoPublicacao: string = this._input('\nDigite "S" para publicação simples ou "A" para publicação avançada: ').toUpperCase();
        let idUsuario: number = parseInt(this._input('ID Usuario: '));

        let usuario = this._redeSocial.consultar(idUsuario);
        if (!usuario) {
            console.log('Usuario nao encontrado!');
            return;
        }

        let idPub: number = parseInt(this._input('ID da Publicação: '));
    
        if (this._redeSocial.consultarPublicacaoPorId(idPub)) {
            throw new PublicacaoExistenteError('ID de publicação já existe!');
        }

        let conteudo: string = this._input('Conteúdo: ');
        let dataHora: Date = new Date();

        let publicacao: Publicacao = tipoPublicacao === 'A' 
        ? new PublicacaoAvancada(idPub, usuario, conteudo, dataHora) 
        : new Publicacao(idPub, usuario, conteudo, dataHora);

        console.log(`\nPublicação ${tipoPublicacao === 'A' ? 'Avançada' : 'Simples'} criada com sucesso!`);
        
        try {
            this._redeSocial.adicionarPublicacao(publicacao);
            console.log('\nPublicação cadastrada com sucesso!');
        } catch (e) {
            if (e instanceof PublicacaoExistenteError) {
                console.log('Erro: Publicação com ID já cadastrada!');
            } else {
                console.log('Erro inesperado ao adicionar publicação:', e);
            }
        }
    }    


    adicionarInteracao() {
        let idPublicacao: number = parseInt(this._input('ID da Publicação: '));
        let publicacao = this._redeSocial.consultarPublicacaoPorId(idPublicacao);

        if (!publicacao || !(publicacao instanceof PublicacaoAvancada)) {
            throw new PublicacaoInexistenteError("Publicação avançada não encontrada!");
        }

        let idUsuario: number = parseInt(this._input('ID Usuario que reagiu: '));
        let usuario = this._redeSocial.consultar(idUsuario);

        if (!usuario) {
            throw new UsuarioInexistenteError('Usuário não encontrado!');
        }

        if ((publicacao as PublicacaoAvancada).usuarioJaInteragiu(usuario)) {
            throw new InteracaoExistenteError("O usuário já reagiu a esta publicação.");
        }

        let tipoInteracaoInput: string = this._input('Digite o tipo de interação (curtir, naoCurtir, riso, surpresa, triste, raiva): ');
        let tipoInteracao: TipoInteracao = TipoInteracao[tipoInteracaoInput as keyof typeof TipoInteracao]; //conversão para Enum

        let dataHora: Date = new Date();
        let interacao: Interacao = new Interacao(this._idInteracao++, publicacao, tipoInteracao, usuario, dataHora);

        try {
            (publicacao as PublicacaoAvancada).reagir(interacao);
            console.log('\nInteração adicionada com sucesso!');
        } catch (e) {
            console.log('\nErro ao adicionar interação:');
        }
    }
    
    buscarPublicacoesPorEmail(): void {
        let email: string = this._input('Digite o e-mail do usuário: ');

        let usuario = this._redeSocial.validarEmail(email);
        if (!usuario) {
            console.log('Usuário não encontrado!');
            return;
        }
        this._redeSocial.exibirPublicacoesPorUsuario(email);
    }

    consultarUsuarioPorId(): void {
        let id: number = parseInt(this._input('\nId de usuario para buscar: '));

        for (let i = 0; i < this._redeSocial.usuarios.length; i++) {
            if (this._redeSocial.usuarios[i].getId() === id) {
                console.log(`Usuario Encontrado: ${this._redeSocial.usuarios[i].getApelido()} (Email: ${this._redeSocial.usuarios[i].getEmail()})`);
                return;
            }
        }
        throw new UsuarioInexistenteError('Usuario Inexistente!');
    }


    consultarPublicacaoPorId(): void {
        let id: number = parseInt(this._input('\nId Publicação Para Buscar: '));

        for (let i = 0; i < this._redeSocial.publicacoes.length; i++) {
            if (this._redeSocial.publicacoes[i].getId() === id) {
                console.log(`Publicacao Encontrada: \nUsuário: ${this._redeSocial.publicacoes[i].getUsuario().getApelido()} \nConteudo: ${this._redeSocial.publicacoes[i].getConteudo()} (\nData e Hora: ${this._redeSocial.publicacoes[i].getDataHora().toLocaleString()})`); 
                return;
            }
        }
        throw new PublicacaoInexistenteError('Publicacao Inexistente!');
    }

    contarPublicacoesPorUsuario(): number {
        let id: number = parseInt(this._input('\nId de usuario para buscar: '));

        let contagem = 0;
        
        let usuario = this._redeSocial.consultar(id);

        if (!usuario) {
            throw new UsuarioInexistenteError('Usuário não encontrado!');
        }

        for (let i = 0; i < this._redeSocial.publicacoes.length; i++) {
            if (this._redeSocial.publicacoes[i].getUsuario().getId() === usuario.getId()) {
                contagem++;
            }
        }
        return contagem;
    }

    exibirContagemPublicacoes(): void {
        try {
            const contagem = this.contarPublicacoesPorUsuario();
            console.log(`O usuário tem ${contagem} publicações.`);
        } catch (e) {
            if (e instanceof UsuarioInexistenteError) {
                console.log(e.message); // Exibe a mensagem de erro
            } else {
                console.log('Erro ao contar publicações:', e);
            }
        }
    }
    
    private imprimirPressionarEnter() {
        this._input("\nPressione <enter>");
    }
}

export {AppRedeSocial}