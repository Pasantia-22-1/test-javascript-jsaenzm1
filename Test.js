/* ==================================================================================================================================================
*  Comenta tu código de JavaScriptAprobado 
? Intenta crear un comentario
================================================================================================================================================== */ 

//Comentario corto.

/* Comentario largo, 
 * se pueden comentar las líneas que se deseen
*/



/* ==================================================================================================================================================
*  Declara variables de JavaScript 
? Declara una variable'myName'
================================================================================================================================================== */ 

//1
var myName;

//2
let myName;

//3
const myName = 'valor';


/* ==================================================================================================================================================
*   Almacenar valores con el operador de asignación(=) 
?   Declara una variable 'a' y debajo asígnale el valor '7'
================================================================================================================================================== */ 

let A; 
A = 7;

/* ==================================================================================================================================================
*   Asigna el valor de una variable a otra variable 
?   Declara una variable 'a' y debajo asígnale el valor '7'
?   Declara una variable 'b' y asígnale el contenido de 'a'
================================================================================================================================================== */ 

let aa;
aa = 7;

let bb = aa;

/* ==================================================================================================================================================
*   Inicializa variables con el operador de asignación 
?   Define una variable 'a' con 'var' e inicialízala con un valor de '9'
================================================================================================================================================== */
var aaa = 9;


/* ==================================================================================================================================================
*   Comprendiendo las variables no inicializadas 
?   Declara tres variables 'a', 'b' y 'c'. 
?   Inicializa las tres variables con '5', '10' y "I am a" respectivamente para que no sean undefined.
?   Utiliza console.log() para ver los resultados
================================================================================================================================================== */ 
// Cambia solo el código debajo de esta línea

let d = 5;
let e = 10;
let f = 'I am a';

console.log( 'el valor de las variables es: ' + d, e, f); 

// Cambia solo el código encima de esta línea

d = d + 1;
e = e + 5;
f = f + " String!";







/* ==================================================================================================================================================
*   Comprendiendo la sensibilidad de mayúsculas en las variables  
?   Crea 3 variables correctamente utilizando camelCase: 'studlycapvar' 'properamelase' 'titlecaseover'
?   Asignale los valores '10', 'A String', '9000'
================================================================================================================================================== */ 
// Declaración de variables

let studyCapVar;
let properAMelase;
let titleCaseOver;


// Asignación de variables

studyCapVar = 10;
properAMelase = 'A String';
titleCaseOver = 9000;





/* ==================================================================================================================================================
*   Suma dos números con JavaScript
?   Declara una variable 'sum' e inicializala con una suma de dos enteros
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 

let suma; 
suma = 2+8;

console.log('2 + 8 = ' + suma); 




/* ==================================================================================================================================================
*   Resta un número de otro con JavaScript
?   Declara una variable 'difference' e inicializala con una resta de dos enteros
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 

let difference; 
difference = 10-2; 

console.log('10 - 2 = ' + difference);




/* ==================================================================================================================================================
*   Multiplica dos números con JavaScript
?   Declara una variable 'product' e inicializala con una multiplicacion de dos enteros
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 

let product; 
product = 5*5;

console.log('5 X 5 =' + product);




/* ==================================================================================================================================================
*   Divide un número entre otro con JavaScript   
?   Declara una variable 'quotient' e inicializala con una división de dos enteros
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 

let quotient;
quotient = 48/6;

console.log('48 / 6 = ' + quotient);




/* ==================================================================================================================================================
*   Incrementa un número con JavaScript 
?   Declara una variable 'myVar' e inicializala con un valor de '87'
?   Incrementala en 1 con '++' 
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 

let myVar = 87;
myVar++;

console.log(myVar);





/* ==================================================================================================================================================
*   Decrementa un número con JavaScript 
?   Declara una variable 'myVar' e inicializala con un valor de '11'
?   Incrementala en 1 con '--'
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 

let myVarDecrease = 11;
myVarDecrease--;

console.log(myVarDecrease);



/* ==================================================================================================================================================
*   Crea números decimales con JavaScript 
?   Crea una variable 'myDecimal' y dale un valor decimal con una parte fraccional
================================================================================================================================================== */ 

let myDecimal; 
myDecimal = 5/3; 

console.log(myDecimal);




/* ==================================================================================================================================================
*   Multiplica dos números decimales con JavaScript
?   Crea una variable 'product' y luego has una multiplicacion con numeros decimales cuyo resultado sea '5.0'
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 

let productoDecimal; 
productoDecimal = 2.21*2.27;

console.log(productoDecimal);




/* ==================================================================================================================================================
*   Divide un decimal entre otro con JavaScript
?   Crea una variable 'quotient' y luego has una division con numeros decimales cuyo resultado sea '2.2'
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 

let quotientDecimal;
quotientDecimal= 5.5/2.5;

console.log(quotientDecimal);




/* ==================================================================================================================================================
*   Encuentra un resto en JavaScript
?   Crea una variable 'quotient' y luego has una operacion de resto cuyo resultado sea '2'
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 

let quotientOperation;
quotientOperation = 50-48;

console.log(quotientOperation);





/* ==================================================================================================================================================
*   Asignación compuesta con adición aumentada
?   Convierte las asignaciones de 'a', 'b' y 'c' para que utilicen el operador '+='.
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */  

var a = 3;
var b = 17;
var c = 12;

// Cambia solo el código debajo de esta línea
a += 12;
b += 9;
c += 7;
console.log(a)
console.log(b)
console.log(c)




/* ==================================================================================================================================================
*   Asignación compuesta con resta aumentada
?   Convierte las tareas de 'a', 'b', y 'c' para utilizar el operador '-='.
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 
var a = 11;
var b = 9;
var c = 3;

// Cambia solo el código debajo de esta línea
a -= 6;
b -= 15;
c -= 1;
console.log(a)
console.log(b)
console.log(c)




/* ==================================================================================================================================================
*   Asignación compuesta con multiplicación aumentada
?   Convierte las tareas de 'a', 'b', y 'c' para utilizar el operador '*='.
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 
var a = 5;
var b = 12;
var c = 4.6;

// Cambia solo el código debajo de esta línea
a *= 5;
b *= 3;
c *= 10;
console.log(a)
console.log(b)
console.log(c)




/* ==================================================================================================================================================
*   Asignación compuesta con división aumentada
?   Convierte las tareas de 'a', 'b', y 'c' para utilizar el operador '/='.
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 
var a = 48;
var b = 108;
var c = 33;

// Cambia solo el código debajo de esta línea
a /= 12;
b /= 4;
c /= 11;
console.log(a)
console.log(b)
console.log(c)




/* ==================================================================================================================================================
*   Declara variables de cadena
?   Crea dos nuevas variables de tipo cadena: 'myFirstName' y 'myLastName' y asígnales tu nombre y apellido, respectivamente.
?   Concatena ambas variables en una variable 'myName'
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 

let myFirstName = String;
let myLastName = String;

myFirstName = 'Jakeline del Rocio';
myLastName = 'Sáenz Mogollon'

console.log(myFirstName + myLastName);





/* ==================================================================================================================================================
*   Escapa comillas literales en cadenas
?   Usa barras invertidas para asignar una cadena a la variable myStr de modo que si lo imprimieras en la consola, verías:
?   I am a "double quoted" string inside "double quotes".
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 
var myStr = ' I am a \ "double quoted" string insede \"double quotes"'

console.log(myStr);






/* ==================================================================================================================================================
*   Cita cadenas con comillas simples
?   Utiliza comillas simples para rodear tu string para no usar '\'
?   <a href="#" target="_blank">Link</a>
================================================================================================================================================== */ 
var myStr = ' <a href="#" target="_blank">Link</a> ';
console.log (myStr);




/* ==================================================================================================================================================
*   Concatena cadenas con el operador "más"
?   usa el operador '+' para concatenar dos strings
?   utiliza console.log() para ver el resultado 
================================================================================================================================================== */ 
var myStr = "Hola, estoy realizando una pasantilla"
var myStr1 = " en Ciancoders."

console.log(myStr + myStr1);





/* ==================================================================================================================================================
*   Concatena cadenas con el operador "más igual" 
?   Construye la cadena anterior en dos líneas uitilizanco "+="
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 
var myStr = "Hola, estoy realizando una pasantilla"
var myStr1 = " en Ciancoders."

console.log(myStr += myStr1);






/* ==================================================================================================================================================
*   Construye cadenas con variables
?   Crea una variable 'myName' que contenga tu nombre
?   Crea una segunda variable que contenga dos strings y 'myName' entre estos.
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 

let myName = 'Jakeline de Rocio';
let string1 = 'hola ' + myName + ' Saenz Mogollon';

console.log(string1);





/* ==================================================================================================================================================
*   Agrega variables a cadenas
?   crea 2 variables que contengan strings 
?   añade una a la otra con el operador '+='
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 






/* ==================================================================================================================================================
*   Encuentra la longitud de una cadena
?   Crea una variable 'lastNameLength' e inicianizala con el valor de 0 y una variable 'lastName' e inicianizala con la cadena 'Lovelace'
?   Usa la propiedad '.length' para contar el número de caracteres en la variable 'lastName' y asignarla a 'lastNameLength' con '+='.
?   y asignarla a 'lastNameLength' con '+='.
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 









/* ==================================================================================================================================================
*   Utiliza la notación de corchetes para encontrar el primer carácter en una cadena
?   Crea una variable 'firstLetterOfLastName' e inicianizala con un string vacio y una variable 'lastName' e inicianizala con la cadena 'Lovelace'
?   Utiliza notación de corchetes para encontrar el primer carácter en la variable 'lastName'
?   y asígnalo a 'firstLetterOfLastName'.
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 









/* ==================================================================================================================================================
*   Comprende la inmutabilidad de las cadenas
?   Corrige la asignación de myStr para que contenga el valor de cadena 'Hello World' 
================================================================================================================================================== */ 
var myStr = "Jello World";
// Cambia solo el código debajo de esta línea
const myStr = "Jello World";




/* ==================================================================================================================================================
*   Utiliza la notación de corchetes 
?   Crea una variable'thirdLetterOfLastName' esta debe ser igual a la tercera letra de la variable 'lastName'
================================================================================================================================================== */ 
var lastName = "Lovelace";
// Cambia solo el código debajo de esta línea





/* ==================================================================================================================================================
*   Utiliza la notación de corchetes para encontrar el último carácter en una cadena
?   Usa notación de corchetes para encontrar el último carácter en la variable 'lastName'.
?   Debes usar '.length' y no puedes usar numeros positivos 
?   utiliza console.log() para ver el resultado
================================================================================================================================================== */ 
var lastName = "Lovelace";

// Cambia solo el código debajo de esta línea
var lastLetterOfLastName = ""


/* ==================================================================================================================================================
*   Lista de compras
?   Crea una lista de compras en la variable 'myList'. La lista debe ser un arreglo multidimensional que contenga varios sub-arreglos(minimo 5).
?   El primer elemento de cada sub-arreglo debe contener una cadena con el nombre del artículo. 
?   El segundo elemento debe ser un número que represente la cantidad.
================================================================================================================================================== */ 

  
   

    






/* ==================================================================================================================================================
*   Escribe JavaScript reutilizable utilizando funciones
?   Crea una función llamada 'reusableFunction' que imprima la cadena 'Hi World' en la consola de desarrollo.
?   Llama a la función.
================================================================================================================================================== */ 

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();


/* ==================================================================================================================================================
*   Pasa valores a las funciones utilizando argumentos
?   Crea una función llamada 'functionWithArgs' que acepte dos argumentos y muestre la suma de ellos en la consola de desarrollador.
?   Llama a la función con dos números como argumentos.
================================================================================================================================================== */ 

function Sumar(num1,num2){
  
  var resultado= num1 + num2;
  console.log(resultado);
}

Sumar(8,9);


/* ==================================================================================================================================================
*   Ámbito global y funciones
?   Usando 'var', declara una variable global llamada 'myGlobal' fuera de cualquier función. Inicialízala con un valor de '10'.
?   Dentro de la función 'fun1', asigna '5' a 'oopsGlobal' sin usar la palabra clave 'var'.
================================================================================================================================================== */ 
// Declara la variable myGlobal debajo de esta línea

var myGlobal;
myGlobal = 10;

function fun1() {
    // Asigna 5 a oopsGlobal aquí
    oopsGlobal = 5
}
// Cambia solo el código encima de esta línea  

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();




/* ==================================================================================================================================================
*   Ámbito global vs. local en funciones
?   Añade una variable local a la función 'myOutfit' para sobrescribir el valor de 'outerWear' con la cadena 'sweater'. 
================================================================================================================================================== */ 
var outerWear = "T-Shirt";

function myOutfit() {
  // Cambia solo el código debajo de esta línea
  let sobrescribir;
  sobrescribir = outerWear;
 
  
  // Cambia solo el código encima de esta línea
  return outerWear;
}

myOutfit();





/* ==================================================================================================================================================
*  Devuelve un valor de una función utilizando "Return" 
?  Crea una función 'timesFive' que acepte un argumento, lo multiplique por '5' y devuelva el nuevo valor.
?  Crea una variable 'Answer' y usala para ver el resultado
================================================================================================================================================== */ 
function timesFive(num){
    return num * 5;
}

var answer = timesFive(2)
console.log(answer)




/* ==================================================================================================================================================
*  Comprendiendo el valor indefinido devuelto por una función 
?  Crea una función 'addFive' sin ningún argumento. Esta función suma '5' a la variable 'sum', pero su valor devuelto es 'undefined'. 
?  llama a la funcion y utiliza console.log() para ver el valor devuelto 
================================================================================================================================================== */ 
var sum = 0;
// Cambia solo el código debajo de esta línea

function addFive() {
  sum = sum + 5;
  return sum;
}

addFive();
console.log(sum);








/* ==================================================================================================================================================
*  Asignación con un valor devuelto 
?  Llama la función 'processArg' con un argumento de '7' y asigna su valor de retorno a la variable 'processed'.
?  Utiliza console.log() para ver el resultado
================================================================================================================================================== */ 
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Cambia solo el código debajo de esta línea


 processArg(7);
 processed = processArg(7);
 console.log(processArg)

/* ==================================================================================================================================================
*   Permanece en línea
?   Escribe una función 'nextInLine' que tome un arreglo (arr) y un número (item) como argumentos.
?   Agrega el número al final del arreglo, luego elimina el primer elemento del arreglo.
?   La función 'nextInLine' debe entonces devolver el elemento que fue removido.
================================================================================================================================================== */ 




// Cambia solo el código encima de esta línea
var testArr = [1,2,3,4,5];
/*
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
*/ 



/* ==================================================================================================================================================
*   Construye objetos en JavaScript
?   Crea un objeto que represente a un perro llamado 'myDog' que contenga las propiedades 'name' (una cadena), 'legs', 'tails' y 'friends'.
?   'name' debe ser una cadena, legs y tails deben ser 'números', y 'friends' debe ser un arreglo.
================================================================================================================================================== */ 
var myDog = {
    // Cambia solo el código debajo de esta línea
     
     
     
        
    // Cambia solo el código encima de esta línea
};






/* ==================================================================================================================================================
*   Accede a propiedades de objetos con notación de puntos
?   Asigna la variable 'hatValue' igual a la propiedad 'hat' del objeto y asigna la variable 'shirtValue' igual a la propiedad shirt del objeto.
================================================================================================================================================== */
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
  
// Cambia solo el código debajo de esta línea
  
var hatValue = testObj;      // Cambia esta línea
var shirtValue = testObj;    // Cambia esta línea

// console.log(hatValue)
// console.log(shirtValue)



/* ==================================================================================================================================================
*   Accede a propiedades de objetos con variables
?   Establece la variable playerNumber a 16. Luego, usa la variable para buscar el nombre del jugador y asignarlo a player.
================================================================================================================================================== */ 
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
  
// Cambia solo el código debajo de esta línea

var playerNumber;       // Cambia esta línea
var player = testObj;   // Cambia esta línea

console.log(player)


/* ==================================================================================================================================================
*   Verifica las propiedades de un objeto 
?   Modifica la función 'checkObj' para verificar si el objeto 'obj' pasado a la función contiene la propiedad 'checkProp'. 
?   Si la propiedad es encontrada, devuelve el valor de la propiedad. Si no, devuelve "Not Found".
================================================================================================================================================== */
function checkObj(obj, checkProp) {
    // Cambia solo el código debajo de esta línea
    
        
  
   
  
    // Cambia solo el código encima de esta línea
}
