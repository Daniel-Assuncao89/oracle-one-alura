var valorTotal = [0,0];
var valorProduto = [50.00,30.00]
var qtd = [0,0]

function aumentarQuantidade(item){

    var quantidade = document.getElementById("quantidadeProduto" + item);
    var total = document.getElementById("totalProdutos" + item);
    qtd[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2); //usar somente 2 casas decimais

    subTotal();

}

function diminuirQuantidade(item){

    var quantidade = document.querySelector("#quantidadeProduto" + item);
    var total = document.getElementById("totalProdutos" + item);
    if(qtd[item] > 0){
        qtd[item] -= 1;
        quantidade.innerHTML = qtd[item];
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item]
        total.innerHTML = valorTotal[item].toFixed(2);

        subTotal();
    } else {
        alert("Precisa ter ao menos 1 unidade para reduzir");
    }
    
}

function subTotal(){
  var subTotal = valorTotal.reduce(
    function(soma, valor){
        return soma + valor;
    }, 0
  )
  var elemento = document.getElementById("valorTotalCompra")
  elemento.innerHTML = subTotal.toFixed(2);
}