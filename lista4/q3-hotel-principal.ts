class Hotel { 
    quantReservas: number = 0;

    constructor(qtd: number) {
        this.quantReservas = qtd;
    }

    adicionarReserva() : void { 
        this.quantReservas++;
    } 

}

let hotel : Hotel = new Hotel(2); //passagem por valor
console.log(hotel.quantReservas);