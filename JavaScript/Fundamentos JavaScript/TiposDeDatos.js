/* =======================================================================
   TIPOS DE DATOS EN JAVASCRIPT
   =======================================================================
   
   En JavaScript, los datos se dividen principalmente en dos grandes grupos:
   1. Tipos de Datos Primitivos (Valores básicos y simples)
   2. Tipos de Datos Objeto / No Primitivos (Estructuras más complejas)
*/

// ==========================================
// 1. TIPOS PRIMITIVOS
// ==========================================

console.log("--- 1. Primitivos ---");

// a) Number (Números)
// Se usa para números enteros y decimales.
var edad = 30;
var precio = 19.99;
console.log("edad es de tipo:", typeof edad);

// b) String (Cadenas de texto)
// Todo lo que vaya entre comillas simples '' o dobles "" o invertidas ``
var nombre = "Juan";
var saludo = "Hola mundo";
console.log("nombre es de tipo:", typeof nombre);

// c) Boolean (Booleanos)
// Solo pueden tener dos valores: verdadero (true) o falso (false).
var esMayorDeEdad = true;
var tieneHambre = false;
console.log("esMayorDeEdad es de tipo:", typeof esMayorDeEdad);

// d) Undefined (Indefinido)
// Significa "No definido". Ocurre cuando creas una variable pero aún no le das valor.
var variableVacia;
console.log("variableVacia es de tipo:", typeof variableVacia);

// e) Null (Nulo)
// Significa "Ausencia intencional de valor". TÚ le dices a JavaScript que esta caja está vacía a propósito.
var nadaCero = null;
// Curiosidad: en JavaScript un bug viejo hace que "typeof null" devuelva "object". ¡Es normal!
console.log(
  "nadaCero es de tipo:",
  typeof nadaCero,
  "(esto es un comportamiento histórico de JS)",
);

// f) Symbol & BigInt (Nuevos, uso avanzado)
// BigInt: Para números gigantescos.
var numeroGigante = 9007199254740991n; // la 'n' al final indica que es BigInt
console.log("numeroGigante es de tipo:", typeof numeroGigante);

// Symbol: Crea identificadores ÚNICOS e irrepetibles, incluso si tienen la misma descripción.
// Se usa mucho para crear propiedades ocultas o seguras dentro de objetos.
var simbolo1 = Symbol("identificador");
var simbolo2 = Symbol("identificador");

// Aunque los creamos con la misma palabra "identificador", JS los considera diferentes.
console.log("simbolo1 es de tipo:", typeof simbolo1);
console.log(
  "¿simbolo1 es exactamente igual a simbolo2?:",
  simbolo1 === simbolo2,
); // Esto dará false




// ==========================================
// 2. TIPOS OBJETO (No Primitivos)
// ==========================================

console.log("\n--- 2. Objetos (No Primitivos) ---");

// a) Array (Arreglos o Listas)
// Son listas de elementos guardados en una sola variable, encerrados en corchetes [ ].
var colores = ["Rojo", "Verde", "Azul"];
var numeros = [10, 20, 30, 40];
console.log(
  "colores es de tipo:",
  typeof colores,
  "(Los arreglos son Objetos)",
);

// b) Object (Objetos comunes)
// Guardan datos que pertenecen a una misma entidad en formato "clave: valor", encerrados en llaves { }.
var persona = {
  nombre: "Juan",
  edad: 40,
  pais: "Colombia",
};
console.log("persona es de tipo:", typeof persona);

// c) Function (Funciones)
// Bloques de código reutilizables. También son objetos en JavaScript.
var saludar = function () {
  console.log("¡Hola!");
};
console.log("saludar es de tipo:", typeof saludar);

/*
=======================================================================
 ¿CÓMO CORRER ESTE ARCHIVO?
=======================================================================

Noté que anteriormente intentaste correr:  `node switch.js`
Y te dio un error porque estabas parado en la carpeta equivocada (d:\Workspace-VSC).

Para correr los archivos de tu curso correctamente:
1. Asegúrate de estar dentro de "Fundamentos JavaScript" en tu terminal.
   Escribe: cd "JavaScript\Fundamentos JavaScript"
2. Una vez allí, ya puedes usar: node TiposDeDatos.js
*/
