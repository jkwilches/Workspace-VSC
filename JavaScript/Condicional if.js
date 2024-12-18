if (true) {
  console.log("hola");
} else {
  console.log("Soy falso");
}

//////////////////////////////////

var edad = 18;

if (edad === 18) {
  console.log("Puedes vota, sera tu 1ra votación");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("No puedes votar");
}

/// Otra forma de solucionar lo mismo operador ternario///
condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";
console.log(resultado);

/////////////////////////////////

console.log("1 = Piedra, 2 = Papel, 3 = Tijera");

var juego = 1;
if (juego === 2) {
  console.log("empate");
} else if (juego === 3) {
  console.log("tiejra gana");
} else {
  console.log("piedra gana");
}
