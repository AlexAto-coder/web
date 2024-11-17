//3. Verificación de mayoría de edad: crea una función que verifique si una persona es mayor de edad 
//   (18 años o más). Pide la edad al usuario y muestra un mensaje que indique si es mayor de edad o no.

function esMayorDeEdad(edad){
let mayor = edad >= 18;
return mayor;
}
let edad = Number (prompt("Ingesa tu edad"));
alert (`Usted es ${esMayorDeEdad(edad)? "mayor de edad" : "menor de edad"}`);
