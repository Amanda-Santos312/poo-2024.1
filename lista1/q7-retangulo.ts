class Retangulo {
    l1: number = 0;
    l2: number = 0;
    l3: number = 0;
    l4: number = 0;

    calcular_area(): number {
        return this.l1 * this.l2;
    }

    calcular_perimetro(): number {
        return (this.l1 + this.l2 + this.l3 + this.l4);
    }
}

let retangulo: Retangulo;
retangulo = new Retangulo();

retangulo.l1 = 2;
retangulo.l2 = 3;
retangulo.l3 = 2;
retangulo.l4 = 3;

console.log(`Area: ${retangulo.calcular_area()}`);
console.log(`Perimetro: ${retangulo.calcular_perimetro()}`);
