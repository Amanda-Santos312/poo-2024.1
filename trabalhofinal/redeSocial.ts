import { UsuarioInexistenteError } from "./excecoes";
import { Usuario, Publicacao, TipoInteracao, Interacao, PublicacaoAvancada} from "./modelos";

class RedeSocial {
    private _usuarios: Usuario[] = [];
    private _publicacoes: Publicacao[] = [];

    inserir(usuario: Usuario) {
        try {
            this.consultar(usuario.getId());
            throw new Error ('Id ja existe' + usuario.getId());
        } catch (error) {
            if (error instanceof UsuarioInexistenteError) {
                this._usuarios.push(usuario);
            }
        }
    }

    consultar(id: Number): Usuario {
        let idProcurado!: Usuario;

        for (let i: number = 0; i < this._usuarios.length; i++) {
            if (this._usuarios[i].getId() == id) {
                idProcurado = this._usuarios[i];
                break;
            }
        }
        if (idProcurado == null) {
            throw new UsuarioInexistenteError('Conta não encontrada: ' + id);
        }
        return idProcurado;
    }

}









export {RedeSocial}