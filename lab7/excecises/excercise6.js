/*
Ejercicio 6: Calculador de descuento
Crea una función llamada calcularDescuento(precio, porcentaje) 
que reciba el precio de un producto y un porcentaje de descuento, 
y retorne el precio final con el descuento aplicado. 
Si el porcentaje es mayor a 100 o menor que 0, debe retornar "Porcentaje no válido".
*/
let descuento = ""
function calcularDescuento(precio, porcentaje) {
    if (porcentaje > 100 || porcentaje < 0) {
        descuento = "porcentaje no valido"
    } else {
        descuento = precio - precio * (porcentaje/100)
    }
    return descuento
}


console.log("-----------------------------------")
console.log("EJERCICIO 6")
console.log("-----------------------------------")
console.log(calcularDescuento(100, 20)); // 80
console.log(calcularDescuento(50, -5));  // "Porcentaje no válido"