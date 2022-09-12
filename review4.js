function pulaLinha() {
  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 100);

var chute = parseInt(prompt("Já pensei. Qual você acha que é?"));

if (chute == numeroPensado) {
  mostra("Uau! Você acertou, pois eu pensei no " + numeroPensado);
} else {
  mostra("Você errou! Eu tinha pensado no " + numeroPensado);
}
