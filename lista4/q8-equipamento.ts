class Equipamento {
    ligado: boolean;

    constructor(ligado: boolean) {
        this.ligado = ligado;
    }

    liga(): void {
        this.ligado = true;
    }

    desliga(): void {
        this.ligado = false;
    }

    inverte(): void {
        if (this.ligado) {
            this.desliga();
        } else {
            this.liga();
        }
    }

    estaLigado(): boolean {
        return this.ligado;
    }
}

let equipamento: Equipamento = new Equipamento(true);

console.log(equipamento.estaLigado()); 