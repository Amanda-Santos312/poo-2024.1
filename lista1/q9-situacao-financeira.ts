class SituacaoFinanceira {
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    calcular_saldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }
}

let situacao: SituacaoFinanceira;
situacao = new SituacaoFinanceira();

situacao.valorCreditos = 550;
situacao.valorDebitos = 200;

console.log(`Saldo a Pagar: ${situacao.calcular_saldo()}`);
