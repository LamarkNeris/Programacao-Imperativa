//Exercício Lista de Compras 
let Lista = ["arroz", "feijão","açúcar","café","leite"]

Lista.push("pão") //Adiciona um item ao final do Array
let ultimoIten = Lista.pop() //Elimina o ultimo item do Array
Lista.shift()  //Elimina o primeiro item do Array
Lista.unshift("carne") //Adiciona um item ao ao Array
let separador=Lista.join("-") //Junta os itens utilizando um separador específico
console.log(separador)
console.log(Lista)
