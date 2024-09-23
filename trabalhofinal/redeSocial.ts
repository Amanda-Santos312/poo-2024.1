import { UsuarioInexistenteError, PublicacaoExistenteError, PublicacaoInexistenteError, UsuarioExistenteError } from "./excecoes";
import { Usuario, Publicacao, TipoInteracao, Interacao, PublicacaoAvancada} from "./modelos";

class RedeSocial {
    usuarios: Usuario[] = [];
    publicacoes: Publicacao[] = [];
    interacoes: PublicacaoAvancada[] = [];
    
    consultar(id: number): Usuario | null {
        for (let usuario of this.usuarios) {
            if (usuario.getId() === id) {
                return usuario;
            }
        }
        return null;
    }

    inserir(usuario: Usuario) {
        if (this.consultar(usuario.getId()) !== null) {
            throw new UsuarioExistenteError('ID já existe: ' + usuario.getId());
        }
        this.usuarios.push(usuario);
    }

    validarEmail(email: string): Usuario | null {
        for (let usuario of this.usuarios) {
            if (usuario.getEmail() === email) {
                return usuario;
            }
        }
        return null;
    }

    adicionarUsuario(usuario: Usuario) {
        if (this.consultar(usuario.getId()) !== null) { 
            throw new UsuarioExistenteError("Usuario com ID ja cadastrado!");
        }
        this.usuarios.push(usuario);
    }
    
    adicionarPublicacao(publicacao: Publicacao) {
        if (this.consultarPublicacaoPorId(publicacao.getId()) !== null) {
            throw new PublicacaoExistenteError("Publicação com ID já cadastrada!");
        }
        this.publicacoes.push(publicacao);
    }
    
    consultarUsuarioPorId(id: number): Usuario {
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].getId() === id) {
                return this.usuarios[i];
            }
        }
        throw new UsuarioInexistenteError('Usuario Inexistente!');
    }
    
    consultarPublicacaoPorId(id: number): Publicacao | null {
        for (let i = 0; i < this.publicacoes.length; i++) {
            if (this.publicacoes[i].getId() === id) {
                return this.publicacoes[i];
            }
        }
        return null;
    }
    
    listarUsuarios(): void {
        if (this.usuarios.length === 0) {
            console.log("\nNão há usuários cadastrados!");
            return;
        }
        console.log("\nUsuários cadastrados:");
        this.usuarios.forEach(usuario => {
            console.log(`\nID: ${usuario.getId()}, Apelido: ${usuario.getApelido()}, Email: ${usuario.getEmail()}`);
        });
    }
    
    listarPublicacoes(): void {
        if (this.publicacoes.length === 0) {
            console.log("Não há publicações cadastradas!");
            return;
        }
        console.log("\nPublicacoes Cadastradas:");
        this.publicacoes.forEach(publicacao => {
            console.log(`\nID: ${publicacao.getId()}, \nUsuario: ${publicacao.getUsuario().getApelido()} ,\nConteudo: ${publicacao.getConteudo()}, \nData Hora: ${publicacao.getDataHora()}`);

        if (publicacao instanceof PublicacaoAvancada) {
            console.log("Tipo: Publicação Avançada");
    
            if (publicacao.interacoes.length > 0) {
                console.log("\nInterações:");
                publicacao.interacoes.forEach(interacao => {
                    console.log(`- ${interacao.getUsuario().getApelido()} reagiu com: ${TipoInteracao[interacao.getTipoInteracao()]}`);
                });
            } else {
                console.log("Nenhuma interação nesta publicação.");
            }
        } else {
            console.log("Tipo: Publicação Simples");    
        }
        });
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

            console.log(`Usuario: ${usuario.getApelido()}`);
            console.log(`Data e Hora: ${data}`);
            console.log(`Conteudo: ${conteudo}`);


            if (publicacao instanceof PublicacaoAvancada) {
                const quantidadeInteracoes = publicacao.interacoes.length;
                console.log(`Interacoes: ${quantidadeInteracoes}`);

                publicacao.interacoes.forEach((interacao) => {
                    console.log(`- Reacao: ${TipoInteracao[interacao.getTipoInteracao()]},\n- Usuario: ${interacao.getUsuario().getApelido()}`)
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

        if (publicacoesUsuario.length === 0) {
            throw new PublicacaoInexistenteError('Este usuário não possui publicações.');
        }

        publicacoesUsuario.sort((a, b) => {
            const dataA = new Date(a.getDataHora());
            const dataB = new Date(b.getDataHora());
            return dataB.getTime() - dataA.getTime(); // Ordena decrescentemente
        });

        console.log("\n***** Publicacoes do Usuario *****");
        publicacoesUsuario.forEach((publicacao) => {
            const usuario = publicacao.getUsuario();
            const data = publicacao.getDataHora();
            const conteudo = publicacao.getConteudo();

            console.log(`- Usuario: ${usuario.getApelido()}`)
            console.log(`- Data e Hora: ${data}`);
            console.log(`- Conteudo: ${conteudo}`);
            console.log('\n--------')
        })
    }    
}

export {RedeSocial}