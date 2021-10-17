let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

// outro exemplo de função comum
let ola = function () {
    return 'Olá'
}

// a mesma função refatorada com arrow function 
ola = () => 'Olá'
ola = _ => 'Olá' //possui um parametro
console.log(ola())