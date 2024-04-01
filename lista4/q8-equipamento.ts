class Equipamento {
    ligado: boolean;

    constructor(ligado: boolean) {
        this.ligado = ligado;
    }

    liga(): void {
        if(!this.ligado) {
            this.ligado = true;
            console.log("Equipamento Ligado!");
        } else {
            console.log("Equipamento já esta ligado!");
        }
    }

    desliga(): void {
        if(this.ligado) {
            this.ligado = false;
            console.log("Equipamento Desligado!");
        } else {
            console.log("Equipamento já esta desligado!");
        }
    }

    inverter(): void {
        if (this.ligado == true) {
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

console.log(equipamento.liga());//Equipamento já está ligado!
console.log(equipamento.desliga());//Equipamento Desligado!
console.log(equipamento.liga());//Equipamento Ligado!
console.log(equipamento.inverter());//Equipamento Desligado!
console.log(equipamento.inverter());//Equipamento Ligado!
console.log(equipamento.estaLigado());//true