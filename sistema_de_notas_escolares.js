/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 e 89   - B
* entre 70 e 79   - C
* entre 60 e 69   - D
* menor que 60    - F

*/
//criar uma função que classifica as notas escolares de A, B, C, D, F
function getScore(score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 69
  let scoreF = score < 60 && score >= 0
//criar um else if pra cada tipo de nota. se a nota final do aluno for xxx mostrar A/B/C...
  let scoreFinal

  if (scoreA) {
    scoreFinal = 'A'
  } 
  else if (scoreB) {
    scoreFinal = 'B'
  } 
  else if (scoreC) {
    scoreFinal = 'C'
  } 
  else if (scoreD) {
    scoreFinal = 'D'
  } 
  else if (scoreF) {
    scoreFinal = 'F'
  } 
  else {
    scoreFinal = 'Nota inválida'
  }
// nota inválida é para o erro, porque não se pode ter nota negativa
  return scoreFinal
}

console.log(getScore(101))
console.log(getScore(0))
console.log(getScore(-10))
console.log(getScore(50))
console.log(getScore(67))
console.log(getScore(75))
console.log(getScore(92))
