var numero = 1;
switch (numero) {
  case 1:
    console.log("Soy uno!");
    break;
  case 10:
    console.log("Soy diez");
    break;
  case 100:
    console.log("Soy un cien");
    break;
  default:
    console.log("No soy ninguno de los anteriores");
}

////////// juego

var juego = 1;
switch (juego) {
  case 1:
    console.log("Empate");

    break;
  case 2:
    console.log("Ganaste");
    break;
  default:
    console.log("Perdiste");
}

/// Prueba de tienda
export function solution(article) {
  if (article == "computadora") {
    return "Con mi computadora puedo programar usando JavaScript";
  } else if (article == "celular") {
    return "En mi celular puedo aprender usando la app de Platzi";
  } else if (article == "cable") {
    return "¡Hay un cable en mi bota!";
  } else {
    return "Artículo no encontrado";
  }
}
