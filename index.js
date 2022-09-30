//***************************************************************EXERCICIO1 VARIAVEIS***************************************************************
// let precoDoProduto= prompt("Insira o preco do produto")
// precoDoProduto = precoDoProduto


// console.log(`O produto ${nomeDoProduto} custaR$${precoDoProduto}`)



//***************************************************************EXERCICIO2 OPERADORES ARITMETICOS***************************************************************
// const num1 = Number(prompt("Insira o primeiro numero"))
// const num2 = Number(prompt("Insira o segundo numero"))


// console.log(`Seus numeros são: num1= ${num1} e num2 = ${num2}`)
// console.log("Soma:", num1 + num2)
// console.log("Subtação:", num1-num2)
// console.log("Multiplicacão:", num1 * num2)
// console.log("Divisão:", num1 / num2)
// console.log("Resto da Divisão:", num1 % num2)



//***************************************************************EXERCICIO3 COMPARADORES***************************************************************
// const numeroSorteado = Math.floor(Math.random() *10) +1
// const numeroRecebido = Number(prompt("Insira um numero de 1 a 10"))


// console.log(`O número sorteado foi: ${numeroSorteado}`)
// if(numeroRecebido === numeroSorteado){
//     console.log("Seu numero é igual ao número sorteado!! ")
// } else if(numeroRecebido> numeroSorteado){
//     console.log("Seu numero é maior que o número sorteado !!")
// } else {
//     console.log("Seu número é menor do que o número sorteado !!")
// }
    



//***************************************************************EXERCICIO4 OPERADORES LOGICOS***************************************************************
// const idade = Number(prompt("Digite sua idade:"))
// const altura = Number(prompt("Digite sua altura em centimetros:"))
// const temProblemaCardiaco = prompt("Voce teem algum problema Cardiaco? S/N:")

// if(idade >=18 && altura >= 160 && temProblemaCardiaco === "N") {
//     console.log("Pode entrar")
// } else{
//     console.log("Não pode entrar")
// }




//***************************************************************EXERCICIO5 STRINGS***************************************************************
// const frase= "Hoje eu vou comer cenoura ebaaa"

// console.log(frase, frase.length)
// console.log(frase.trim(), frase.length)
// console.log(frase.toLocaleLowerCase())
// console.log("Tem a palavra comer?" , frase.includes("comer"))
// console.log("Tem a palavra batata?" , frase.includes("batata"))

// const novafrase = frase.replaceAll("cenoura" , "batata")
// console.log(novafrase)
// console.log("Tem a palavra comer?" , novafrase.includes("comer"))
// console.log("Tem a palavra batata?" , novafrase.includes("batata"))



//***************************************************************EXERCICIO6 ARRAYS***************************************************************
// const listaDeCompras = ["batata", "cenoura", "beterraba"]

// console.log(listaDeCompras[1])
// console.log("Tamanho da lista;", listaDeCompras.length)
// listaDeCompras.push("mandioca")
// console.log(listaDeCompras)
// console.log("Tem cenoura?",listaDeCompras.includes("cenoura"))

// listaDeCompras.splice(1, 1)
// console.log(listaDeCompras)


//***************************************************************EXERCICIOS7   FUNÇOES ***************************************************************
// const array = [6,7,8,9,10]

// function divideDois1(arrayDeNumeros) {
//     const primeiro = array [0] /2
//     const ultimo = array[array.length-1] /2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[array.length-1]=ultimo
//     return arrayDeNumeros
// }

// let divideDois2 = function(arrayDeNumeros){
//     const primeiro = array [0] /2
//     const ultimo = array[array.length-1] /2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[array.length-1]=ultimo
//     return arrayDeNumeros
// }

// let divideDois3 = function(arrayDeNumeros){
//     const primeiro = array [0] /2
//     const ultimo = array[array.length-1] /2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[array.length-1]=ultimo
//     return arrayDeNumeros
// }


// console.log(divideDois1(array))
// console.log(divideDois2(array))
// console.log(divideDois3(array))




//***************************************************************EXERCICIO8 OBJETOS ***************************************************************
// const pessoa= {
//     nome:"Leticia",
//     idade:27,
//     generoMusical:"Rock"
// }

// console.log(`O nome da pessoa é ${pessoa.nome},ela tem ${pessoa.idade},anos e gosta muito de ${pessoa.generoMusical}`)

// const outraPessoa={
//     ...pessoa,
//     nome:"Tais"
// }

// console.log(outraPessoa)



//***************************************************************EXERCICIO9 CONDICIONAIS***************************************************************
// const numero= Number(prompt("Digite um número"))

// if(numero % 2 === 0){
//     console.log("É par")
// } else {
//     console.log("'E impar")
// }


//segundo exercicio
//const bichinho = prompt("Digite um bichinho")

// if(bichinho === "cachorro"){
//     console.log("au au")
// }else if(bichinho === "gato"){
//     console.log("miau")
// }else if (bichinho === "vaca"){
//     console.log("Muuuuuu")
// }else{
//     console.log("barulho não encontrado")
// }

// switch(bichinho){
//     case"cachorro":
//         console.log("au au au ")
//         break;
//     case "gato":
//         console.log("miau")
//         break;
//     case "vaca":
//         console.log("muuuuuu")
//         break;
//     default:
//         console.log("Barulho não encontrado")
//         break
// }




//***************************************************************EXERCICIO10-LAÇOS***************************************************************
//const numeros = [11,15,18,14,12,13,100]
//****AQUI FIZEMOS COM  WHILE**** //
// //let i = 0
// let maior = -Infinity
// while(i < numeros.length){
//     if(numeros[i] > maior){
//         maior = numeros[i]
//     }
//     i++
// }

//console.log(`O maior número é ${maior}`)


//****AQUI FIZEMOS COM FOR**** //
// const numeros = [11,15,18,14,12,13,100]

// let maior = -Infinity

// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] > maior){
//         maior=numeros[i]
//     }
// }

// console.log(`O maior número é ${maior}`)



//****AQUI FIZEMOS COM FOR OF **** //
// const numeros = [11,15,120,18,14,12,13,100]
// let maior = -Infinity

// for(let numero of numeros){
//     if(numero > maior){
//         maior=numero
//     }
// }

// console.log(`O maior número é ${maior}`)


//segunda questao dentro:
// const prof = {
//     nome: "Letícia Chijo",
//     idade: 27,
//     aulasFront: true,
//     aulasBack: false,
//     jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
//     contaPiada: () => console.log("É pave ou pacume?"),
//     pet: {
//         nome: "Polly",
//         especie: "cachorrinha",
//         raca: "Lhasa Apso",
//         snacksFavoritos: ["biscoito", "maçã", "frango"]
//     }
// }

// const verificaAula = (aula) => {
//     if (aula) {
//         return "Dou"
//     } else {
//         return "Não dou"
//     }
// }

// const aulasBack = verificaAula(prof.aulasBack)
// const aulasFront = verificaAula(prof.aulasFront)

// const jogos = []


// for(let i = 1; i <= prof.jogosFavoritos.length; i++){
//     jogos.push(`${i}) ${prof.jogosFavoritos[i-1]}`)
// }

// console.log(jogos)

// const frase = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos.
// ${aulasFront} aulas de front e ${aulasBack} aulas de back.
// Meus jogos favoritos são: ${jogos}
// Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]}
// `
// console.log(frase)
// prof.contaPiada()




//***************************************************************EXERCICIO11 MAP E FILTER ***************************************************************
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
]

const produtosComDesconto = produtos.map((prod)=>{
    return {...prod, preco: (prod.preco*0.9).toFixed(2)}
})

console.log(produtosComDesconto)

const hortifruti = produtos.filter((prod) => {
    return prod.categoria === "Hortifruti"
})

console.log(hortifruti)

const hortifrutiComDesconto = produtos
.filter((prod) => {
    return prod.categoria === "Hortifruti"
}).map((prod)=>{
    return {...prod, preco: (prod.preco*0.9).toFixed(2)}
})

console.log(hortifrutiComDesconto)