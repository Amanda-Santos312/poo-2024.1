class Produtos {
    private _id: string;
    private _descricao: string;
    private _qtd_produtos: number;
    private _valor_unit: number;

    constructor(_id: string, _descricao: string, _qtd_produtos: number, valor_unit: number) {
        this._id = _id;
        this._descricao = _descricao;
        this._qtd_produtos = _qtd_produtos;
        this._valor_unit = valor_unit;
    }

    repor(_qtd_produtos: number) {
        this._qtd_produtos++;
    }

    dar_baixa(_qtd_produtos: number) {
        this._qtd_produtos--;
    }

    get quantidade(): number {
        return this._qtd_produtos;
    }
}

let produto: Produtos = new Produtos('1', 'arroz', 2, 5.25);


class ProdutoPerecivel extends Produtos {
    private _dt_validade: string;

    constructor(_dt_validade: string, _id: string, _descricao: string, _qtd_produtos: number, _valor_unit: number) {
        super(_id, _descricao, _qtd_produtos, _valor_unit);

        this._dt_validade = _dt_validade;
    }

    is_valid(_dt_validade: string): boolean {
        let data_atual = new Date();
        let data_validade = new Date(this._dt_validade);

        return data_validade >= data_atual;
    }

    repor(_qtd_produtos: number) {
        if(this.is_valid(this._dt_validade)) {
            super.repor(_qtd_produtos);
        } else {
            console.log("Impossivel repor um produto vencido.")
        }
    }

    dar_baixa(_qtd_produtos: number) {
        if (this.is_valid(this._dt_validade)) {
            super.dar_baixa(_qtd_produtos);
        } else {
            console.log("Impossivel dar baixa em um produto vencido.")
        }
    }
}

let produto_perecivel: ProdutoPerecivel = new ProdutoPerecivel('2024-12-31', '1', 'feijao', 10, 8.9);

produto_perecivel.repor(5);
produto_perecivel.dar_baixa(2)
console.log(produto_perecivel.quantidade);

class Estoque {
    private _produtos: (Produtos | ProdutoPerecivel)[] = []; /*Produtos[]*/

    inserir(produto: Produtos | ProdutoPerecivel): void {
        this._produtos.push(produto);
        console.log('Produto inserido no estoque.');
    }

    /*consultar(id: string): Produtos | ProdutoPerecivel | undefined{
        
    }*/


}