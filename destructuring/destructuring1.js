const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero:1000
    }
}

// Lógica
// Retire nome e idade do objeto pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

// Retire o valor e declare variáveis de nome e idade do objeto pessoa
const { nome: n, idade: i } = pessoa
console.log(n, i)

// Retire os valores  logradouro, numero e cep no endereco no objeto pessoa.
const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)