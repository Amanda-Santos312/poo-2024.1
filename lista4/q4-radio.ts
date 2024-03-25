class Radio { 
    volume : number = 0;

    constructor(volume : number) { 
        this.volume = volume;
    } 
}

let r : Radio = new Radio(10); //espera ter um valor para volume
r.volume = 10;
console.log(r.volume);