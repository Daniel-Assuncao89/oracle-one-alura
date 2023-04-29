var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado)

var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
);
console.log(numerosFiltrados);


function buscarValores(valor){
    return valor < 5;
}
var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);


var r1 = numeros.filter((valor) => {
    return valor > 5;
});
console.log(r1);


var r2 = numeros.filter(valor => valor > 5);
console.log(r2);


var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

funcionarios.filter(
    function(funcionario){
        console.log(funcionario.nome);
    }
)

var pessoasListagem2 = funcionarios.filter(
    function(funcionario){
        return funcionario.nome.length < 5;
    }
)
console.log(pessoasListagem2);

var produtos = [
    {id: 1, descricao: "SmartPhone", categoria: "Eletronico"},
    {id: 2, descricao: "Smart TV", categoria: "Eletronico"},
    {id: 3, descricao: "AirFryer", categoria: "Eletrdomestico"},
    {id: 4, descricao: "Fogão", categoria: "Eletrodomestico"},
]

var eletronicos = produtos.filter(
    function(produto){
        return produto.categoria == "Eletronico";
    }
)
console.log(eletronicos)