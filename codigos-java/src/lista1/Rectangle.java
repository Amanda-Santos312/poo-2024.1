public class Rectangle {
    int l1 = 0;
    int l2 = 0;

    public int calcular_area() {
        return this.l1 * this.l2;
    }

    public  int calcular_perimetro() {
        return (2 * this.l1 + 2 * this.l2);
    }

    public static void main(String[] args) {
        Rectangle retangulo = new Rectangle();

        retangulo.l1 = 3;
        retangulo.l2 = 2;

        System.out.println("Area: "+  retangulo.calcular_area());
        System.out.println("Perimetro: " + retangulo.calcular_perimetro());
    }
}
