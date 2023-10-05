let num = [5, 8, 2, 9, 3]
num.push(1)//Cria um novo vetor no final
num.sort() //Coloca os valores do vetor em ordem crescente
console.log(num)
console.log(`O vetor tem o tamanho de ${num.length} espaços`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (pos = 0 ; pos < num.length; pos++) {
    console.log(num[pos])
}

for (pos in num) {//Melhor maneira de usar o for em vetores/Obj
    console.log(num[pos])
}