// Assessores de propriedade
// fornecem acesso as propriedades de um objeto usando a notação de ponto ou a notação de colchetes.

//object.property
//object["property"]

//Exemplo

const obj1 = {}
obj1.nome = 'bola'
// obj1['nome'] = 'bola'

// outra forma

function Obj(nome) {
    this.nome =nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj1.nome)
console.log(obj2.nome)
console.log(obj3.nome)
