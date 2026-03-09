/* =======================================================================
   REPASO: FUNDAMENTOS DE JAVASCRIPT
   =======================================================================
   
   Esta sección resume lo que hemos aprendido hasta este punto en el curso:

   1. VARIABLES: "Cajas" para guardar datos en la memoria (var nombre = "Juan").
   
   2. TIPOS DE VALORES: 
      - Primitivos: Numbers (10), Strings ("Hola"), Booleans (true/false), Vacíos (null, undefined).
      - Objetos/No Primitivos: Arrays/Listas ([1, 2, 3]) y Objetos formales ({nombre: "Juan"}).
      
   3. FUNCIONES: Bloques de código reutilizables.
      - Declarativas: Tienen un nombre formal al inicio y se pueden llamar sencillamente.
      - Expresivas: Generalmente anónimas guardadas dentro de una variable.
      
   4. CONDICIONALES: Toma de decisiones en el código.
      - if / else if / else: Evaluaciones en cascada.
      - Operador ternario: El if escrito en una sola línea (condición ? true : false).
      - switch: Evaluación de casos puntuales con "case" y "break".
      
   5. OPERADORES LÓGICOS y COMPARADORES (Vistos en este ejercicio):
      - >= : Mayor o igual.
      - || : OR lógico (la condición se cumple si AL MENOS UNA es verdadera).
      - !== : Desigualdad estricta (verifica que tanto el VALOR como el TIPO DE DATO sean diferentes).
      - typeof : Palabra reservada que nos dice qué tipo de dato es un valor (ej: typeof 5 da "number").

   =======================================================================
   EJERCICIO PRÁCTICO: EL SISTEMA DE CALIFICACIONES ESCOLAR
   =======================================================================

   Instrucciones:
   Crear una función que reciba una nota numérica (del 0 al 100) y devuelva su calificación en letras:
   - 90 a 100 -> "A"
   - 80 a 89  -> "B"
   - 70 a 79  -> "C"
   - 60 a 69  -> "D"
   - Menor a 60 -> "F"

   Reto Extra (Programación Defensiva):
   Añadir una validación ANTES de procesar las notas, para asegurar que el usuario no introduzca letras, ni números negativos, ni números mayores a 100.
*/

// --- SOLUCIÓN PASO A PASO ---

// PASO 1: Crear la función declarativa que recibe el parámetro (variable) "nota"
function calcularCalificacion(nota) {
  // RETO EXTRA (Paso Adicional): Validación Defensiva (Guardia de seguridad)
  // Evaluamos 3 errores posibles juntos:
  // - No es un número (usando typeof y !==)
  // - O (||) es menor de 0
  // - O (||) es mayor de 100
  if (typeof nota !== "number" || nota < 0 || nota > 100) {
    console.log(
      "Error: Por favor ingresa una nota númerica válida entre 0 y 100.",
    );

    // Este "return" vacío hace que la función se detenga en esta línea y aborte misión.
    return;
  }

  // PASO 2: Primer condicional (el caso más alto)
  // Evaluamos el rango superior primero.
  if (nota >= 90) {
    console.log("Tu calificación es A");
  }

  // PASO 3: Encadenar condiciones "else if"
  // Gracias a que JavaScript evalúa de arriba hacia abajo, si la nota era 95, pasó el primer "if" y el código termina.
  // Pero si no pasó, sigue bajando. Ya sabemos que para llegar aquí la nota a fuerzas es menor a 90,
  // por lo que no hace falta corroborar que la "nota < 90", solo si es ">= 80".
  else if (nota >= 80) {
    console.log("Tu calificación es B");
  } else if (nota >= 70) {
    console.log("Tu calificación es C");
  } else if (nota >= 60) {
    console.log("Tu calificación es D");
  }

  // PASO 4: El caso final ("else") por descarte
  // Como ya cubrimos todo desde 60 hasta 100, si el código llega hasta aquí,
  // lógicamente todo lo demás es menor a 60 y merece un reprobado, sin tener que evaluar la condición.
  else {
    console.log("Tu calificación es F");
  }
}

// --- ZONA DE PRUEBAS ---

console.log("==== RESULTADOS DE CALIFICACIONES ====");
// Casos Normales (Ejecutando la función pasándole argumentos numéricos validos)
calcularCalificacion(95); // Debería imprimir: A
calcularCalificacion(85); // Debería imprimir: B
calcularCalificacion(75); // Debería imprimir: C
calcularCalificacion(65); // Debería imprimir: D
calcularCalificacion(45); // Debería imprimir: F

console.log("\n==== PRUEBAS DEL RETO EXTRA (Engaños/Valores Inválidos) ====");
// Casos Inválidos (El guardia de seguridad 'if' inicial debe interceptarlos)
calcularCalificacion(150); // Valor mayor al límite permitido. Debería imprimir el error.
calcularCalificacion(-5); // Valor negativo. Debería imprimir el error.
calcularCalificacion("veinte"); // Diferente tipo de dato (String en vez de Number). Debería imprimir el error.
