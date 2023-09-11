console.log("Ola, mundo");

const valorString = "1234";
const valorNumber = Number(valorString);
console.log(typeof valorNumber);

const minhaString = "JavaScript é incrivel";
const numeroDeCaracteres = minhaString.length;
const numeroDePalavras = minhaString.split(" ").length;
console.log('numero de caracteres sao: ' + numeroDeCaracteres);
console.log("numero de palavra sao: " + numeroDePalavras);

const nomes = ["Ana", "Joao", "Pedro", "Milena", "Julio"];
for(i=0; i<nomes.length; i++){
    console.log(nomes[i]);
}
