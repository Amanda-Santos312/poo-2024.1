class ControleDeAudio {
    volume: number = 2;

    aumentarVolume(): number {
        if (this.volume < 10) {
            return this.volume += 1;
        }
        return this.volume
    }

    diminuirVolume(): number {
        if (this.volume != 0) {
            return this.volume -= 1;
        }
        return this.volume
    }

    getVolume(): number {
        return this.volume;
    }
}

let volume: ControleDeAudio;
volume = new ControleDeAudio();

console.log(volume.aumentarVolume());
console.log(volume.aumentarVolume());
console.log(volume.aumentarVolume());
console.log(volume.aumentarVolume());
console.log(volume.aumentarVolume());
console.log(volume.aumentarVolume());
console.log(volume.aumentarVolume());
console.log(volume.aumentarVolume());//para aqui no 10;
console.log(volume.aumentarVolume());//só mais uma verificação para vê se termina no 10;

console.log(volume.diminuirVolume());
console.log(volume.diminuirVolume());
console.log(volume.diminuirVolume());
console.log(volume.diminuirVolume());
console.log(volume.diminuirVolume());
console.log(volume.diminuirVolume());
console.log(volume.diminuirVolume());
console.log(volume.diminuirVolume());
console.log(volume.diminuirVolume());
console.log(volume.diminuirVolume());//para aqui no 0;
console.log(volume.diminuirVolume());//só mais uma verificação para vê se termina no 0;

console.log(volume.getVolume());//o resultado vai ser 0;