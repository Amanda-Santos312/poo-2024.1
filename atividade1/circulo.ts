class Circulo {
    raio: number = 0;
    pi: number = 3.14;

    calcular_area(): number {
        return this.pi * this.raio ** 2;
    }

    calcular_perimetro(): number {
        return (2 * this.pi * this.raio);
    }
}

let circulo: Circulo;
circulo = new Circulo();

circulo.raio = 5;

console.log(`Area: ${circulo.calcular_area().toFixed(1)}`);
console.log(`Perimetro: ${circulo.calcular_perimetro().toFixed(1)}`);