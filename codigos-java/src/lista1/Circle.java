public class Circle {
    int raio = 0;
    double pi = 3.14;

    public double calcular_area() {
        return this.pi * Math.pow(this.raio,  2);
    }

    public double calcular_perimetro() {
        return ((2 * this.pi) * this.raio);
    }

    public static void main(String[] args) {
    Circle circulo = new Circle();

    circulo.raio = 4;
    circulo.pi = 3.14;

        System.out.println("Area: " + circulo.calcular_area());
        System.out.println("Perimetro: " + circulo.calcular_perimetro());
    }
}
