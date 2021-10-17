// for (variável; condição; ação)
for (var i = 0; i<10; i++) {
    console.log(i)
}
// Neste caso, se o console.log estivesse fora do bloco, var ainda estaria visível fora do escopo.

//console.lo('i =', i)

// se trocarmos a palavra var por let, o valor de i não estará mais visivel. Pois let não é visível fora do escopo.