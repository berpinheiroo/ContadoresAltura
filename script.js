/* 1. Crie um array para armazenar a idade e outro para armazenar a altura de 10 alunos.
No final, exiba quantos alunos com mais de 13 anos tem uma altura menor do que a
média da altura de todos os alunos. */

var idade = []
var altura = []

var contadorIdade = 0
var contadorAltura = 0
while (contadorAltura < 10) {
    var idadeInd = parseInt(prompt("Qual e sua idade?"))
    var alturaInd = parseInt(prompt("Qual e sua altura?"))
    idade[contadorIdade] = idadeInd
    altura[contadorAltura] = alturaInd
    contadorIdade++
    contadorAltura++
}


for(index = 0; index < altura.length; index++){
    console.log(idade[index], altura[index])
}


var mediaAltura = 0
var somaAltura = 0
for(var i = 0; i < altura.length; i++){
    somaAltura += altura[i]
}
mediaAltura = somaAltura / altura.length

console.log("A media das alturas foi de:", mediaAltura.toFixed(0))

var abaixoMedia = 0
for(i = 0; i < altura.length; i++){
    if(idade[i] > 13 && altura[i] < mediaAltura){
        abaixoMedia += 1
    }
}

console.log(abaixoMedia, "alunos com mais de 13 anos tem altura abaixo da media")