function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
    // console.log(document.getElementById("agradecimento"))
    // alert("Obrigado por clicar!")
}

function redirecionar(){
    // window.open("https://www.google.com.br")
    window.location.href = "https://www.google.com.br"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    // alert("Trocar texto")
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

// function soma(n1, n2){
//     return n1 + n2
// }

// function validaIdade(idade){
//     var validar;
//     if(idade >= 18)
//         validar = true
//     else
//         validar = false
//     return validar
// }

// var idade = prompt("Qual sua idade?")
// console.log(validaIdade(idade))

// alert (soma(5,10))

// var d = new Date()
// alert(d.getDay())
// alert(d.getHours())
// alert(d.getMinutes())

// var count
// for(count=0; count <=5; count++) {
//     alert(count)
// }

// var count = 0;
// while (count < 10) {
//     console.log(count)
//     alert(count)
//     count++
// }
// var idade = prompt("Qual a sua idade?")
// if (idade >= 18)
//     alert("Maior de idade")
// else 
//     alert("Menor de idade")

// var frutas = [{nome: "Maçã", cor:"Vermelha"}, {nome: "Uva", cor:"Verde"}]
// console.log(frutas)
// alert(frutas[1].nome)
// alert(frutas.cor)

// var fruta = {nome: "Maçã", cor:"Vermelha"}
// console.log(fruta.nome)
// alert(fruta.cor)
// var lista = ["Maçã", "Pêra", "Laranja"]
// lista.push("Uva")
// // lista.pop()


// console.log(lista)
// console.log(lista.toString())
// console.log(lista.join(" / "))

// var nome = "Gustavo Xavier";
// var idade = 40;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// //alert("Bem vindo " + nome + " e você tem " + idade + " anos ");
// // alert(idade + idade2)
// console.log(nome)
// console.log(idade + idade2)
// console.log(idade * idade2)
// console.log(frase.toUpperCase())
// console.log(frase.toLocaleLowerCase())
// // alert(frase.replace("Japão", "Brasil"))