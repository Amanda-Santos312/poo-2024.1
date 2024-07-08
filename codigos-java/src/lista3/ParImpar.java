public class ParImpar {
	int numero = 0;

	public boolean parImpar(int numero) {
		if (numero % 2 == 0) {
			return true;
		}
		return false;
	}

	public static void main(String[] args) {
		ParImpar numero = new ParImpar();

		System.out.println(numero.parImpar(3));
	}
}