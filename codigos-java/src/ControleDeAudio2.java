/* Questão 6 da Lista1 Extra */
public class ControleDeAudio2 {
    int volume = 2;

    public int aumentarVolume() {
        if (volume < 10) {
            return ++volume;
        }
        return volume;
    }

    public int diminuirVolume() {
        if (volume != 0) {
            return --volume;
        }
        return volume;
    }

    public int getVolume() {
        return volume;
    }
    
    //aqui na main terei só a instância do objeto volume e as chamadas dos métodos:
    public static void main(String[] args) {
        ControleDeAudio2 volume = new ControleDeAudio2();

        System.out.println(volume.aumentarVolume());
        System.out.println(volume.aumentarVolume());
        System.out.println(volume.aumentarVolume());
        System.out.println(volume.aumentarVolume());
        System.out.println(volume.aumentarVolume());
        System.out.println(volume.aumentarVolume());
        System.out.println(volume.aumentarVolume());
        System.out.println(volume.aumentarVolume());
        System.out.println(volume.aumentarVolume());

        System.out.println(); //só para separar

        System.out.println(volume.diminuirVolume());
        System.out.println(volume.diminuirVolume());
        System.out.println(volume.diminuirVolume());
        System.out.println(volume.diminuirVolume());
        System.out.println(volume.diminuirVolume());
        System.out.println(volume.diminuirVolume());
        System.out.println(volume.diminuirVolume());
        System.out.println(volume.diminuirVolume());
        System.out.println(volume.diminuirVolume());
        System.out.println(volume.diminuirVolume());
        System.out.println(volume.diminuirVolume());

        System.out.println(); //só para separar

        System.out.println(volume.getVolume());
    }
}