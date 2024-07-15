class Hora {
    
    constructor(private hora: number, private minutos: number, private segundos: number){}

    getHora(): number {
        return this.hora;
    }

    getMinutos(): number {
        return this.minutos;
    }

    getSegundos(): number {
        return this.segundos;
    }

    horaString(): string {
        const formataNumero = (num: number): string => {
            return num < 10? `0${num}` : `${num}`;
        }

        const hh = formataNumero(this.hora);
        const mm = formataNumero(this.minutos);
        const ss = formataNumero(this.segundos);

        return `${hh}:${mm}:${ss}`;
    }
}

let h: Hora = new Hora(12, 34, 56);
console.log(h.horaString());