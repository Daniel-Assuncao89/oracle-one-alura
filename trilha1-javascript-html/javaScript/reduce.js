var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var soma = numeros.reduce( 
    function(soma, numero){
    return soma + numero;
}, 0) // o 0 represente qual valor inical que o parametro soma vai comecar
console.log(soma)
