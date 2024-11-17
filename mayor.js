//4. Comparación de dos números: pide dos números al usuario y muestra cuál es mayor o si son iguales.

alert("Calculemos el mayor de los 2 números que ingreses");
let a = Number (prompt(`Ingrese un número por favor:`));
let b = Number (prompt(`Ingrese otro número por favor:`));
if (a> b){
alert (`El número ${a} es mayor que ${b}`)
}else if (a <b) {
alert (`El número ${a} es menor que ${b}`)
} else if (a=b){
alert (`Los números ingresados son iguales`)
} 