/*
Ejercicio 4: Calculadora básica
Escribe una función llamada calculadora(operacion, num1, num2) que reciba una operación ("suma", "resta", "multiplicacion", "division")
y dos números. Retorna el resultado de la operación. 
Si la operación no es válida, debe retornar "Operación no reconocida".
Recuerde que "No se puede dividir entre 0".
*/
let result = ""
function calculadora(operacion, num1, num2) {
    if (operacion == "suma") {
        result = num1 + num2
    } else if (operacion == "resta") {
        result = num1 - num2
    } else if (operacion == "division" && num2 == 0) {
        result = "no se puede dividir entre 0"
    } else if (operacion == "division") {
        result = num1 / num2
    } else if (operacion == "multiplicacion") {
        result = num1 * num2
    } else {
        result = "operacion no reconocida!"
    }
    return result
    
}   
console.log("-----------------------------------")
console.log("EJERCICIO 4")
console.log("-----------------------------------")
console.log(calculadora("suma", 5, 3));         // 8
console.log(calculadora("division", 10, 0));    // "No se puede dividir entre 0"
console.log(calculadora("multiplicacion", 2, 4)); // 8*
console.log(calculadora(":3", 1, 2));