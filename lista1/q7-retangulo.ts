class Retangulo {
    l1: number = 0;
    l2: number = 0;

    calcular_area(): number {
        return this.l1 * this.l2;
    }

    calcular_perimetro(): number {
        return (2 * this.l1 + 2 * this.l2);
    }

    //parte da lista extra:
    eh_quadrado(): boolean {
        /*if(this.l1 === this.l2) {
            return true;
        }
        return false;*/
        return this.l1 == this.l2;
    }
}

let retangulo: Retangulo;
retangulo = new Retangulo();

retangulo.l1 = 2;
retangulo.l2 = 2;

console.log(`Area: ${retangulo.calcular_area()}`);
console.log(`Perimetro: ${retangulo.calcular_perimetro()}`);
console.log(retangulo.eh_quadrado())