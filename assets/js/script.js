/**
 * DIFERENCIA ENTRE VARIABLES VAR, LET Y CONST:
 * 1.- Las declaraciones [VAR] tienen un ámbito global o un ámbito función/local, mientras que [LET] y [CONST] tienen un ámbito de bloque.
 * 2.- Las variables [VAR] pueden ser modificadas y re-declaradas dentro de su ámbito; las variables [LET] pueden ser modificadas, pero no re-declaradas; las variables [CONST] no pueden ser modificadas ni re-declaradas.
 * 3.-Todas ellas se elevan a la parte superior de su ámbito. Pero mientras que las variables [VAR] se inicializan con undefined, [LET] y [CONST] no se inicializan.
 * 4.- Mientras que [VAR] y [LET] pueden ser declaradas sin ser inicializadas, [CONST] debe ser inicializada durante la declaración.
 */

// [SECCIÓN HTML]
// PRIMERO: Aquí solicitamos al usuario que ingrese los valores a través del browser.
let nota1HTML = +prompt("Ingrese la Nota 1 de HTML");
let nota2HTML = +prompt("Ingrese la Nota 2 de HTML");
let nota3HTML = +prompt("Ingrese la Nota 3 de HTML");

// SEGUNDO: Obtenemos los valores ID de la tabla html -> donde dejaremos el valor que nos ingreso por el navegador el usuario.
let html1 = document.getElementById("HTML1");
let html2 = document.getElementById("HTML2");
let html3 = document.getElementById("HTML3");
let HTMLPromedio = document.getElementById("HTMLPromedio");

// FINALMENTE: aquí se están escribiendo los valores en la tabla de bootstrap.
html1.innerHTML = nota1HTML;
html2.innerHTML = nota2HTML;
html3.innerHTML = nota3HTML;
HTMLPromedio.innerHTML = ((nota1HTML + nota2HTML + nota3HTML) / 3).toFixed(2);

// [SECCIÓN CSS]
// PRIMERO: Aquí solicitamos al usuario que ingrese los valores a través del browser.
let nota1CSS = +prompt("Ingrese la Nota 1 de CSS");
let nota2CSS = +prompt("Ingrese la Nota 2 de CSS");
let nota3CSS = +prompt("Ingrese la Nota 3 de CSS");

// SEGUNDO: Obtenemos los valores ID de la tabla html -> donde dejaremos el valor que nos ingreso por el navegador el usuario.
let css1 = document.getElementById("CSS1");
let css2 = document.getElementById("CSS2");
let css3 = document.getElementById("CSS3");
let CSSPromedio = document.getElementById("CSSPromedio");

// FINALMENTE: aquí se están escribiendo los valores en la tabla de bootstrap.
css1.innerHTML = nota1CSS;
css2.innerHTML = nota2CSS;
css3.innerHTML = nota3CSS;
CSSPromedio.innerHTML = ((nota1CSS + nota2CSS + nota3CSS) / 3).toFixed(2);

// [SECCIÓN JAVASCRIPT]

// PRIMERO: Aquí solicitamos al usuario que ingrese los valores a través del browser.
let nota1JAVASCRIPT = +prompt("Ingrese la Nota 1 de JAVASCRIPT");
let nota2JAVASCRIPT = +prompt("Ingrese la Nota 2 de JAVASCRIPT");
let nota3JAVASCRIPT = +prompt("Ingrese la Nota 3 de JAVASCRIPT");

// SEGUNDO: Obtenemos los valores ID de la tabla html -> donde dejaremos el valor que nos ingreso por el navegador el usuario.
let JAVASCRIPT1 = document.getElementById("JAVASCRIPT1");
let JAVASCRIPT2 = document.getElementById("JAVASCRIPT2");
let JAVASCRIPT3 = document.getElementById("JAVASCRIPT3");
let JAVASCRIPTPromedio = document.getElementById("JAVASCRIPTPromedio");

// FINALMENTE: aquí se están escribiendo los valores en la tabla de bootstrap.
JAVASCRIPT1.innerHTML = nota1JAVASCRIPT;
JAVASCRIPT2.innerHTML = nota2JAVASCRIPT;
JAVASCRIPT3.innerHTML = nota3JAVASCRIPT;
JAVASCRIPTPromedio.innerHTML = (
  (nota1JAVASCRIPT + nota2JAVASCRIPT + nota3JAVASCRIPT) /
  3
).toFixed(2);

// NOTAS IMPORTANTES:
/**
 * El método .toFixed(2): Nos permitirá tener el número con 2 decimales.
 * El método toFixed() formatea un número usando notación de punto fijo.
 */

/**
 * El método Window.prompt() muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.
 */

/**
 * La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
 * Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.
 */
