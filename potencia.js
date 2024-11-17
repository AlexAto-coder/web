// 1. Potencia: crea una función que eleve un número a una potencia dada. Solicita el número 
//   base y el exponente al usuario, luego muestra el resultado
alert("Ingresa un números y te devolvemos el resultado a la potencia ingresada");
let num1 = Number(prompt("Ingresa un número"));
let exponente = Number(prompt("Ingresa el exponente a elevar"));
let potencia = (num1 ** exponente) .toFixed (2);
alert (`el resultado de ${num1} elevado al exponente ${exponente} es:  ${potencia}`);