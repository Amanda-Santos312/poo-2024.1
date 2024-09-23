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

class UsuarioInexistenteError extends AplicacaoError {
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

class InteracaoExistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

class EmailExistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}


export {AplicacaoError, UsuarioExistenteError, UsuarioInexistenteError, PublicacaoExistenteError, PublicacaoInexistenteError, EmailExistenteError, InteracaoExistenteError}