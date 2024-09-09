/*
Ejercicio 7: Validar contraseñas
Crea una función llamada validarContrasena(contrasena) que verifique si una contraseña cumple con las siguientes reglas:

Debe tener al menos 8 caracteres.
Debe contener al menos un número.
Si cumple con ambas, retornar "Contraseña válida", de lo contrario "Contraseña no válida".
*/

function validarContrasena(contrasena) {
    let msj = ""
    let numcount = contrasena.match(/\d/g);
    let digits = numcount ? numcount.length : 0;
    let caracteres = contrasena.length
    if (caracteres >= 8 && digits >= 1) {
        msj = "Contraseña válida"
    } else {
        msj = "Contraseña no válidaa"
    }
    return msj 
}

console.log("-----------------------------------")
console.log("EJERCICIO 7")
console.log("-----------------------------------")
console.log(validarContrasena("pass1234")); // "Contraseña válida"
console.log(validarContrasena("password")); // "Contraseña no válida"