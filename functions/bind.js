// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

// neste caso a resposta será undefined
const falar = pessoa.falar
falar()

// No entanto, se usarmos o bind, obteremos 'Bom dia!'
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()