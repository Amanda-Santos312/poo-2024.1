class SituacaoFinanceira {
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    calcular_saldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }

    //parte da lista extra:
    verificar_situacao(): string {
        if (this.calcular_saldo() < 0) {
            return `Saldo Negativo (R$${this.calcular_saldo()})`
        }
        return `Saldo Positivo (R$${this.calcular_saldo()})`
    }
}

let situacao: SituacaoFinanceira;
situacao = new SituacaoFinanceira();

situacao.valorCreditos = -100;
situacao.valorDebitos = 1000;

console.log(`Saldo a Pagar: ${situacao.calcular_saldo()}`);
console.log(situacao.verificar_situacao())