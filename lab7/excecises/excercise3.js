/*
Ejercicio 3: Mayor de dos números
Crea una función llamada mayorDeDos(num1, num2)
que reciba dos números como argumentos y retorne el mayor de los dos. 
Si los números son iguales, debe retornar "Los números son iguales".
*/
let resultado = ""
function mayorDeDos(num1, num2) {
    if (num1 > num2) {
        resultado = num1
    }
    else if (num1 < num2) {
        resultado = num2
    }
    else if (num1 === num2) {
        resultado = "Los números son iguales"
    }
    return resultado 
}

console.log("-----------------------------------")
console.log("EJERCICIO 3")
console.log("-----------------------------------")
console.log(mayorDeDos(5, 10)); // 10
console.log(mayorDeDos(8, 8));  // "Los números son iguales"