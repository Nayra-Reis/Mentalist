var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3
 
while(tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10 para que Dustin possa comer mais um pudim"))

  if (numeroSecreto == chute) {
    alert("Dustin acaba de comer mais um pudim graças a você!")
    break
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor!")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    alert("O numero secreto é maior!")
    tentativas = tentativas - 1 
  } 
}

if (chute != numeroSecreto) {
  alert("Suas tentativas acabaram. Dustin não pode comer mais um pudim. O numero secreto era: " + numeroSecreto)
}
