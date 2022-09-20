var numero;
var soma = 0;
for (var i = 0; i < 7; i++) {
  numero = Number(prompt("Entre com o numero: "));
  soma+= numero;
}

document.write("A soma dos positivos é: " + soma)
