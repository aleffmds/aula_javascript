// -------------- Aula 05 ----------------------------------------

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; // Injetando código HTML no site.
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com.br/"); // Abre a página em uma nova aba.
    //window.location.href = "https://www.google.com.br/"; // Abre a página na mesma aba.
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado"
    //document.getElementById("move").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    

}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

// -------------- Aula 04 ----------------------------------------

/*
function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Japão", "Japão", "Brasil"));

var validar = 0; // variável global

function validarIdade(){
    var validar; // variável local
    if(idade >= 18){
        validar = true;
    } else {
        validar = false;
    }

    return validar;
}

var idade = prompt("Digite a sua idade: ");
validarIdade(idade);
console.log(validar);
*/

// -------------- Aula 03 ----------------------------------------

/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth()+1);
*/

/*
for(var count = 0; count <=5; count++){
    console.log(count);
}
*/

/*
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Informe a sua idade: ");
if(idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/
// -------------- Aula 02 ----------------------------------------

//var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]; // lista de dicionario
//var frutas = {nome: "maça", cor: "vermelha"}; // dicionario
//console.log(frutas[0].nome);
//alert(frutas[1].cor);
//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva"); // Acrescenta o valor uva na string lista
//lista.pop(); // Exclui uma valor da string lista
//console.log(lista.length); // Mostra o tamanho da lista
//console.log(lista.reverse()); // Inverte a ordem da lista
//console.log(lista);
//console.log(lista.toString()); // Converte o vetor para uma string
//console.log(lista.join(" | ")); // Altera a virgula por pipeline

// -------------- Aula 01 ----------------------------------------

//var nome = "Aleff Martins";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo.";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome); // exibe uma mensagem no console do navegador
//console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil")); // troca a palavra Japão por Brasil. Isso se tratando de uma string.  
//console.log(frase.toUpperCase()); // coloca a frase toda em maiúscula.
//console.log(frase.toLowerCase()); // coloca a frase toda em minusculo.
//alert(frase.replace("Japão", "Brasil"));
