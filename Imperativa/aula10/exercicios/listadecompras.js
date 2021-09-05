var listaDeCompras=['sabote','lustra móveis','arroz','macarrão','tomate']

console.log("O método Join() converte os elementos de um Array em uma String,tendo como separador padrão a vírgula.O separador pode ser definido entre os parênteses.");
console.log(listaDeCompras.join());

console.log("O método Pop() remove o último elemento do array e retorna o elemento removido.MUDA o array");
console.log(listaDeCompras.pop());

console.log("O método Push() inclui o elemento definido dentro dos parênteses no final do array e retorna o tamanho do array.");
console.log(listaDeCompras.push('alho'));

console.log("O método Shift() remove o primeiro elemento do array e retorna o elemento removido. MUDA o array.");
console.log(listaDeCompras.shift());

console.log ("O método Unshift() adiciona elementos definidos dentro do parentese no inicio do array e retorna o novo length.")
console.log(listaDeCompras.unshift('óleo','margarina','café'))