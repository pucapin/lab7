/*
Ejercicio 2: Número par o impar
Crea una función llamada esPar(numero) que reciba un número como argumento y 
retorne "El número es par" si el número es divisible entre 2, o "El número es impar" en caso contrario.
*/
let mensaje = ""
function esPar(numero) {
    if (numero / 2 === 2) {
        mensaje = "El número es par"
    }
    else {
        mensaje = "El número es impar"
    }
    return mensaje
}

console.log("-----------------------------------")
console.log("EJERCICIO 2")
console.log("-----------------------------------")
console.log(esPar(4)); // "El número es par"
console.log(esPar(7)); // "El número es impar"