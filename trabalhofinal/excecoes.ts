class AplicacaoError extends Error {
    constructor(message: string) {
        super(message)
    }
}

class UsuarioExistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

class PublicacaoExistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

class PublicacaoInexistenteError extends AplicacaoError  {
    constructor(message: string) {
        super(message)
    }
}

class PublicacaoJaCurtidaError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}



export {PublicacaoJaCurtidaError, PublicacaoInexistenteError, UsuarioExistenteError, PublicacaoExistenteError}