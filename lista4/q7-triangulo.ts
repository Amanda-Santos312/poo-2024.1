class Triangulo {
    lado1: number = 0;
    lado2: number = 0;
    lado3: number = 0;

    constructor(a: number, b: number, c: number) {
        this.lado1 = a;
        this.lado2 = b;
        this.lado3 = c;
    }

    ehTriangulo(): boolean {
        return Math.abs(this.lado2 - this.lado3) < this.lado1 && this.lado1 < (this.lado2 + this.lado3);        
    }

    ehIsosceles(): boolean {
        return this.ehTriangulo() === true && (this.lado1 === this.lado2 || this.lado1 === this.lado3 || this.lado2 === this.lado3);
    }

    ehEquilatero(): boolean {
        return this.ehTriangulo() === true && (this.lado1 === this.lado2 && this.lado1 === this.lado3);
    }

    ehEscaleno(): boolean {
        return this.ehTriangulo() === true && (this.lado1 !== this.lado2 && this.lado1 !== this.lado3 && this.lado2 !== this.lado3);
    }
}

let triangulo: Triangulo = new Triangulo(3, 4, 5);

console.log(triangulo.ehTriangulo()); //true
console.log(triangulo.ehIsosceles()); //false
console.log(triangulo.ehEquilatero()); //false
console.log(triangulo.ehEscaleno()); //true