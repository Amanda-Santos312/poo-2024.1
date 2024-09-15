import { PublicacaoJaCurtidaError, PublicacaoExistenteError, PublicacaoInexistenteError, UsuarioExistenteError } from "./excecoes"

class Usuario {
    private _id: number;
    private email: string;
    private nome: string;
    private senha: string;

    constructor(_id: number, nome: string, email: string, senha: string) {
        this._id = _id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    get_id(): number {
        return this._id;
    }

    getNome(): string {
        return this.nome;
    }

    getEmail(): string {
        return this.email;
    }

    getSenha(): string {
        return this.senha;
    }

}

class Publicacao {
    private _id: number;
    private usuario: Usuario;
    private conteudo: string;
    private dataHora: string;
    protected interacoes: any;

    constructor(_id: number, usuario: Usuario, conteudo: string, dataHora: string, interacoes: any) {
        this._id = _id;
        this.usuario = usuario;
        this.conteudo = conteudo;
        this.dataHora = dataHora;
        this.interacoes = interacoes;
    }

    get_id(): number {
        return this._id;
    }

    getUsuario(): Usuario {
        return this.usuario;
    }

    getConteudo(): string {
        return this.conteudo;
    }

    getDataHora(): string {
        return this.dataHora;
    }

    getInteracoes(): any {
        return this.interacoes;
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
    private publicacao: Publicacao;
    private tipoInteracao: TipoInteracao;
    private usuario: Usuario;
    private dataHora: string;

    constructor(_id: number, publicacao: Publicacao, tipoInteracao: TipoInteracao, usuario: Usuario, dataHora: string) {
        this._id = _id;
        this.publicacao = publicacao;
        this.tipoInteracao = tipoInteracao;
        this.usuario = usuario;
        this.dataHora = dataHora;
    }

    get_id(): number {
        return this._id;
    }

    getPublicacao(): Publicacao {
        return this.publicacao;
    }

    getTipoInteracao(): TipoInteracao {
        return this.tipoInteracao;
    }

    getUsuario(): Usuario {
        return this.usuario;
    }

    getDataHora(): string {
        return this.dataHora;
    }
}

class PublicacaoAvancada extends Publicacao {
    interacoes: Interacao[] = [];
}


class RedeSocial {
    usuarios: Usuario[] = [];
    publicacoes: Publicacao[] = [];
    avancadas: PublicacaoAvancada[] = [];

    adicionarUsuario(usuario: Usuario) {
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].get_id() === usuario.get_id()) {
                throw new UsuarioExistenteError("Usuario com ID ja cadrastrado!")
            }
        }
        this.usuarios.push(usuario);
    }

    adicionarPublicacao(publicacao: Publicacao) {
        for (let i = 0; i < this.publicacoes.length; i++) {
            if (this.publicacoes[i].get_id() === publicacao.get_id()) {
                throw new PublicacaoExistenteError("Publicacao com ID ja cadrastrado!")
            }
        }
        this.publicacoes.push(publicacao);
    }

    consultarUsuarioPorId(_id: number): string | undefined {
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].get_id() === _id) {
                return this.usuarios[i].getNome();
            }
        }
        return undefined;
    }

    consultarPublicacaoPorId(id: number): string | undefined {
        for (let i = 0; i < this.publicacoes.length; i++) {
            if (this.publicacoes[i].get_id() === id) {
                return this.publicacoes[i].getUsuario().getNome();
            }
        }
        return undefined;
    }

    listarUsuarios(): void {
        if (this.usuarios.length > 0) {
            console.log("Lista de usuários cadastrados: ");
            this.usuarios.forEach((usuario) => {
                console.log(usuario.getNome());
            });
        } else {
            console.log("Não há usuários cadastrados.");
        }
    }

    listarPublicacoes(): void {
        if (this.publicacoes.length > 0) {
            console.log("Lista de publicacoes cadastrados: ");
            this.publicacoes.forEach((publicacao) => {
                console.log(publicacao.getUsuario().getNome());
            });
        } else {
            console.log("Não há publicacoes cadastrados.");
        }
    }

    listarPublicacoesDecrescente(): void {
        if (this.publicacoes.length === 0) {
            throw new PublicacaoInexistenteError("Nao existe nenhuma publicacao!");
            return;
        }

        this.publicacoes.sort((a, b) => {
            const dataA = new Date(a.getDataHora());
            const dataB = new Date(b.getDataHora());
            return dataB.getTime() - dataA.getTime(); // Ordena decrescentemente
        });

        console.log("\n***** Feed de Publicacoes *****");
        this.publicacoes.forEach((publicacao) => {
            const usuario = publicacao.getUsuario();
            const data = publicacao.getDataHora();
            const conteudo = publicacao.getConteudo();

            console.log(`Usuario: ${usuario.getNome()}`);
            console.log(`Data e Hora: ${data}`);
            console.log(`Conteudo: ${conteudo}`);


            if (publicacao instanceof PublicacaoAvancada) {
                const quantidadeInteracoes = publicacao.interacoes.length;
                console.log(`Interacoes: ${quantidadeInteracoes}`);

                publicacao.interacoes.forEach((interacao) => {
                    console.log(`- Reacao: ${TipoInteracao[interacao.getTipoInteracao()]},\n- Usuario: ${interacao.getUsuario().getNome()}`)
                });
            }
            console.log(`\n-----`)
        })
    }

    exibirPublicacoesPorUsuario(email: string): void {
        const publicacoesUsuario: Publicacao[] = [];
        this.publicacoes.forEach((publicacao) => {
            if (publicacao.getUsuario().getEmail() === email) {
                publicacoesUsuario.push(publicacao);
            }
        });

        this.publicacoes.sort((a, b) => {
            const dataA = new Date(a.getDataHora());
            const dataB = new Date(b.getDataHora());
            return dataB.getTime() - dataA.getTime(); // Ordena decrescentemente
        });

        console.log("\n***** Publicacoes do Usuario *****");
        publicacoesUsuario.forEach((publicacao) => {
            const usuario = publicacao.getUsuario();
            const data = publicacao.getDataHora();
            const conteudo = publicacao.getConteudo();

            console.log(`- Usuario: ${usuario.getNome()}`)
            console.log(`- Data e Hora: ${data}`);
            console.log(`-Conteudo: ${conteudo}`);
            console.log('\n--------')
        })
    }

    reagirAPublicacaoAvancada(publicacao: PublicacaoAvancada, usuario: Usuario, tipoInteracao: TipoInteracao): void {
        for (let i = 0; i < publicacao.interacoes.length; i++) {
            const interacao = publicacao.interacoes[i];

            if (interacao.getUsuario().getEmail() === usuario.getEmail()) {
                throw new PublicacaoJaCurtidaError("Usuario ja reagiu a publicacao");
            }
        }




    }
}


/*listarNomesDeUsuarios(): string[] {
    let nomes: string[] = [];
    for (let i = 0; i < this.usuarios.length; i++) {
        nomes.push(this.usuarios[i].getNome()); // Adiciona apenas o nome ao array
    }
    return nomes;
}*/


/*1.a*/
let usuario1 = new Usuario(1, "João", "joao@email.com", "123456");
let usuario2 = new Usuario(2, "Maria", "maria@email.com", "678910");
let usuario3 = new Usuario(1, "Maria", "maria@email.com", "678910");
/*console.log(usuario1)*/

/*1.b*/
let publicacao1 = new PublicacaoAvancada(1, usuario1, "Olá, mundo!", "2021-10-01", []);
let publicacao2 = new PublicacaoAvancada(2, usuario2, "Hello, world!", "2021-10-02", []);
let publicacao3 = new PublicacaoAvancada(2, usuario2, "Hello, world!", "2021-10-02", []);
let publicacao4 = new PublicacaoAvancada(3, usuario1, "Aula de POO", "2021-10-03", []);
let publicacao5 = new PublicacaoAvancada(4, usuario1, "Sabadouu", "2024-09-14", []);
/*console.log(publicacao1)*/

/*1.d*/
let interacao1 = new Interacao(1, publicacao1, TipoInteracao.curtir, usuario2, "2021-10-03");
let interacao2 = new Interacao(2, publicacao2, TipoInteracao.naoCurtir, usuario1, "2021-10-04");
/*console.log(interacao1)*/

/*2.a*/
let redeSocial = new RedeSocial();
redeSocial.adicionarUsuario(usuario1)
redeSocial.adicionarUsuario(usuario2)

redeSocial.adicionarPublicacao(publicacao1);
redeSocial.adicionarPublicacao(publicacao2);
redeSocial.adicionarPublicacao(publicacao4);
redeSocial.adicionarPublicacao(publicacao5);

/*2.b TESTES DE ERROS:*/
/*I redeSocial.adicionarUsuario(usuario3) VAI DAR ERROR */
/*II redeSocial.adicionarPublicacao(publicacao3); VAI DAR ERROR */

publicacao1.interacoes.push(interacao1);
publicacao2.interacoes.push(interacao2);

redeSocial.adicionarUsuario(usuario1);
redeSocial.adicionarUsuario(usuario2);

/*redeSocial.listarUsuarios();
/*redeSocial.listarPublicacoes();*/

/*2.c*/
/*redeSocial.listarPublicacoesDecrescente();*/
/*2.d*/
redeSocial.exibirPublicacoesPorUsuario("joao@email.com");

/*3*/
/*console.log(redeSocial.consultarPublicacaoPorId(1)) OK;*/
/*console.log(redeSocial.consultarUsuarioPorId(1)); OK*/


export { Usuario, Publicacao, TipoInteracao, Interacao, RedeSocial }