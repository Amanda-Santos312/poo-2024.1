public class Finance {
    int valorCreditos = 0;
    int valorDebitos = 0;

    public int calcular_saldo() {
        return this.valorCreditos - this.valorDebitos;
    }

    public int verificar_situacao() {
        if (this.calcular_saldo() < 0) {
            return (this.calcular_saldo());
        }
        return (this.calcular_saldo());
    }

    public static void main(String[] args) {
        Finance situacao = new Finance();

        situacao.valorCreditos = 1000;
        situacao.valorDebitos = 100;

        System.out.println("Saldo a Pagar: " + situacao.calcular_saldo());
        System.out.println(situacao.verificar_situacao());
    }
}