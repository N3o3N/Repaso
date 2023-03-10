// Esta alerta sirve para ver si la conexion del documento html.index e index.js esta bien.
// alert("hola mundo")


// <!-- TRABAJANDO CON LA CONSOLA DEL NAVEGADOR

// Vamos a trabajar un poco con la consola del navegador para ir amigándonos con
// ella ya que será nuestra mejor amiga de ahora en más.
// 1. Declara una variable llamada nombre en tu consola y asignale tu nombre.
// 2. Declara una variable llamada apellido y asignale como valor tu apellido.
// 3. Muestra por consola las variables nombre y apellido. -->

let nombre = "Gerardo";
console.log(nombre);

let apellido = "Veiga";
console.log(apellido);



// Ejercicio 1: Ensalada de frutas

// 1. Declara un array llamado ensaladaDeFrutas con al menos 5 frutas.
// 2. Usa un bucle For y muestra cada ítem de ensaladaDeFrutas en la consola, con el
// siguiente mensaje: “Las frutas que hay en la ensalada son:”

// // Aca declaramos el Array
var ensaladaDeFrutas = ["banana", "naranja", "uva", "durazno", "manzana"];
console.log(ensaladaDeFrutas);

// // Aca nos muestra el resultado de la array con el texto.
for (var i = 0; i < ensaladaDeFrutas.length; i++) {
    console.log("Las frutas que hay en la ensalada son: " + ensaladaDeFrutas[i]);
}

// Es un bucle for para recorrer cada elemento del array.
// La variable i = 0 sirve para saber en que indice del array nos encontramos o en donde va a comenzar.
// i < ensaladaDeFrutas.length Significa que el bucle se va a ejectuar mientras i sea menor que el tamaño del array "ensaladaDeFrutas"
// i++ Significa que cada vez que se ejecute el codigo dentro del bucle el valor de "i" se incrementa en 1.
// Con console.log("texto que queremos que diga" + contenido del array [i]"); el "i" indice del array.


// Ejercicio 2: Promedio de edad

// 1. Crea un array de edades con al menos 6 edades distintas.
// 2. Recorre el array con un
// for y obtén el promedio de las edades del array.

// PARA HACER MAS FOR
// for (inicialización; condición; actualización) {
// código a ejecutar
//   }

// Declaramos el array
var edades = [20, 25, 30, 35, 40, 45];
console.log(edades);

// Declaramos la variable suma, con el valor inicial 0, para despues almacenar la suma de todas las edades del array "edades", y despues utilizarlo en un ejercicio matematico.
var suma = 0;
console.log(suma);

// Es un bucle for para recorrer cada elemento del array.
// La variable i = 0 sirve para saber en que indice del array nos encontramos o en donde va a comenzar.
for (var i = 0; i < edades.length; i++) {
    suma += edades[i];

    // i < edades.length", Significa que el bucle seguirá ejecutándose mientras "i" sea menor que la longitud del array (hasta no alla mas lugares en el array)
    // i++ Significa que cada vez que se ejecute el codigo dentro del bucle el valor de "i" se incrementa en 1.
    // suma += edades[i] En cada vuelta del bucle se suman las edades a la variable "suma"

    // console.log("Lo que quiera poner:" + la variable)
    console.log("suma actual: " + suma);
} // Con este console log se muestra el resultado actual de la suma en cada vuelta del bucle.

// Creamos la variable resultado para poder llamar el resultado del total de la suma dividido el largo del Array.
var resultado = suma / edades.length;

// console.log("Lo que quiera poner:" + la variable)
console.log("El promedio de edades es: " + resultado);
// Con este consolo log se muestra el resultado total, en este caso el resultado que esta ingresado en mi variable "resultado".



// Ejercicio 3: Mis amigos.
// Haga un programa que filtre el arreglo con un for y devuelva uno nuevo con el nombre de
// sus amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro que es amigo
// tuyo! De lo contrario, no lo son.
// const amigo = [“Ryan”, “Kieran”, “Mark”, “Miguel”]
// El resultado esperado es [“Ryan”, “Mark”]
// Nota: este ejercicio se ha hecho en pruebas técnicas para puestos de programadores.


// // // Con este console log puedo ver el largo de "Ryan".
// // // console.log(amigos[0].length);

const amigos = ["Ryan", "Kieran", "Mark", "Miguel"];
let mejoresAmigos = [];
for (let i = 0; i < amigos.length; i++) {
    if (amigos[i].length === 4) {
        mejoresAmigos.push(amigos[i])
    }
}
console.log("Los mejores amigos son: " + mejoresAmigos);




// Ejercicio 4: Métodos de arrays.
// Practiquemos los métodos de arrays. Dado el siguiente array:
// const listaDeSuper = ["jabon","pasta","azucar","arroz","tomates"];
// Instrucciones:
// 1. Agregue al final del array un nuevo producto "shampoo"
// 2. Elimine el primer producto del array
// 3. Consulta el largo del array y muestralo por la consola.
// 4. Consulta si existe el elemento "shampoo" a través del método indexOf()



const listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];
// console.log(listaDeSuper);
// console.log(listaDeSuper.length);

// ACA CON EL METODO PUSH AGREGAMOS UN ELEMENTO EN ESTA CASO "SHAMPOO" AL FINAL DEL ARRAY
const agregar = listaDeSuper.push('shampoo');
// console.log(listaDeSuper);
// console.log(listaDeSuper.length);

// ACA CON EL METODO SHIFT ELIMINAMOS EL PRIMER ELEMENTO DE UN ARRAY EN ESTA CASO "JABON".
const eliminar = listaDeSuper.shift();

// CON ESTE CONSOLELOG MOSTRAMOS EL LARGO DE LA LISTA DEL SUPER.

console.log(listaDeSuper.length);

// CON INDEX BUSCAMOS SHAMPOO EN EL ARRAY
console.log(listaDeSuper.indexOf("shampoo"));

// console.log(listaDeSuper);




// Ejercicio 5: Mi primera función
// Declara una función llamada saludo() que muestre una alerta de Bienvenida al visitante al
// invocar por la consola del navegador.

// Declarando la function.
function saludo() {
    alert("Bienvenido visitante");
}

// Llamada a la function.

// saludo(); 



// Ejercicio 6: Calculando el mayor
// 1. Declara una función que se llama calculoMayor() y pásale como parámetros
// (num1,num2).
// 2. Dentro de la función muestra una alerta que diga quién de los números ingresados
// es mayor. En caso de ser iguales, tendrá que indicarlo a través de una alerta
// también.
// 3. Invoca la función y llena los argumentos con los números que desees.



// `${num1} mayor que ${num2}` OTRA FUNCION MAS SIMPLE. (no la use ahora!)

// declaramos la function.
function calculoMayor(num1, num2) {

    // Declaramos la condicion.
    if (num1 > num2) {
        alert(num1 + " es mayor que el " + num2) /* Esta es la alerta */

        // Esta es otra condicion 
    } else if (num2 > num1) {
        alert(num2 + " es mayor que el " + num1) /* Esta es la alerta */

        // Esta es otra condicion 
    } else if (num1 === num2) {
        alert(num1 + " es igual a " + num2) /* Esta es la alerta */
    }
}
/*Yo los puse para testear */
// console.log(calculoMayor(10, 10)) /* console log */



// Ejercicio 7: Mis amigos.

// 1. Declara una función que se llame filtrarAmigos() y pásale como parámetro (arr).
// 2. La función deberá filtrar el arreglo y devolver uno nuevo con el nombre de sus
// amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro que es
// amigo! De lo contrario, no lo son.
// const amigo1 = [“Ryan”, “Kieran”, “Mark”, “Miguel”]
// const amigo2 = [“Ringo”,”Jhon”,”Paul”,”George”,”Ada”,”Marie”]
// El resultado esperado para amigo1 es [“Ryan”, “Mark”]
// El resultado esperado para amigo2 es [”Jhon”,”Paul”]


// Declaramos la Array.
const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"];
const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Gerardo", "Ada", "Marie"];

// Declaramos la funcion.
function filtrarAmigos(arr) {

    /* hacemos el recorrido del array */
    for (var i = 0; i < arr.length; i++) {

        /* Aca declaramos la condicion */
        if (arr[i].length === 4) {

            // console.log(arr[i]);
        }
    }
}

// CONSOLE LOG CON EL FILTRO (MUESTRA LOS AMIGOS)
// console.log();
// filtrarAmigos(amigo1)
// console.log();
// filtrarAmigos(amigo2)





// Ejercicio 8: Tirar dados.

// 1. Crea un función tirarDado() que cuando sea ejecutada en la consola tire un
// resultado aleatorio del siguiente array: const dado = [1,2,3,4,5,6];
// 2. Deberás codear dentro del bloque de la función, el lanzamiento aleatorio a través de
// un math.ramdom (pregúntale a san Google como funciona este señor).


// Declaramos el array.
const dados = [1, 2, 3, 4, 5, 6];

// Creamos la funcion.
function tirarDados() {

    // declaramos la condicion
    let random = dados[Math.floor(Math.random() * dados.length)] /* Math.floor para que nos de numeros enteros */
    console.log(random)
}
tirarDados();




// Ejercicio 9: Creando y consultando un objeto

// Crea un objeto con el nombre toDoList debería tener las siguientes propiedades y valores:
// ● tipo de tarea: un string que diga "Compras" (ojo con los espacios en el nombre de la
// propiedad, tienes que poner entre comillas si tiene espacios)
// ● dia: un string que indique el día a realizar la tarea.
// ● productos: un array con los nombres de los productos.
// ● cantidad de productos: un número que indica la cantidad de productos de las
// compras. (Recuerda los espacios en el nombre de la propiedad)
// ● estado: "pendiente"
// ● notificacion: un método(una función) que haga una alerta con el siguiente mensaje
// "Esta tarea tiene una prioridad urgente!".

// Ahora desde la consola extrae estos valores de las siguientes formas:
// 1. El día de la compra usando dot notation.
// 2. El tipo de tarea usando bracket notation.
// 3. Extrae la cantidad de productos usando bracket notation.
// 4. Ejecuta el método (función) de la propiedad notificación (tienes que extraerlo del objeto y
// recuerda que es una función).


let toDoList = {
    "tipo de tarea": "Compras",
    /* Tarea */

    dia: "Jueves",
    /* Dia */

    // Es un array con objetos 
    listaProductos: ["banana", "mandarina", "ciruela", "jabon", "cuaderno", "alfajor", "refesco"],
    /* Productos */

    cantidadDeProducto: 7,
    /* Cantidad de productos */

    // Es un string
    estado: "pendiente",

    // Aca creamos la funcion "notificacion" con una alerta.
    notificacion: function() {
        alert("Esta tarea tiene una prioridad urgente!")
    }
};

/* console log para ver la lista completa, con DOT NOTATION (poniendo punto para llamar) */
// console.log(toDoList.dia); 

/* este console log es para ver que tarea estamos haciendo, usando bracket notation (parentesis cuadrado para llamar)*/
// console.log(toDoList["tipo de tarea"]);

/* este console log es para ver la cantidad de productos, usando bracket notation (parentesis cuadrado para llamar)*/
// console.log(toDoList["cantidadDeProducto"])

/* Aca tenemos la llamada de la funcion con el console log (nos va a dar una alerta pop-up) */
// console.log(toDoList);
// toDoList.notificacion();



// Ejercicio 10: Consultando valores.

// Muchas veces vamos a tener estructuras más complejas de objetos y nosotros vamos a
// tener que acordarnos de todos los conceptos que hemos visto hasta ahora. Copia y pega
// esto en tu archivo JS
// Consultemos por consola los siguientes valores:
// 1. Consulta el valor ("Super Hero Squad") de la propiedad squadName.
// 2. Consulta el valor que dice "Madame Uppercut" (ayuda:
// objeto-propiedad-arreglo-propiedad).
// 3. Consulta el valor que dice "Superhuman reflexes".
// 4. Consulta el valor "39" de la propiedad age de Madame Uppercut.

// CODIGO DADO POR EL EJERCICIO
const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [{
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes "]
        }
    ]
}

// Aca hacemos las consultas solicitadas.

// Accedemos al valor de "Super Hero Squad" con Dot notation.
console.log(superHeroes.squadName);

// Accedemos al valor "Madame Uppercut" de la propiedad "name" del segundo objeto dentro del arreglo "members", con Corchetes anidados.
console.log(superHeroes["members"][1]["name"]); /* ponemos el el numoro la posicion a consultar sino sabemos hacmeos un console log*/

// Accedemos al valor "Superhuman reflexes" dentro del arreglo "powers" del objeto Madame Uppercut, con corchetes anidados.
console.log(superHeroes["members"][1]["powers"][2]);

// Aca accedemos al valor "39" de la propiedad age de Madame Uppercut, con la anotacion de corchetes anidados:
console.log(superHeroes["members"][1]["age"]);




// Ejercicios de métodos avanzados de arrays

// EJERCICIO 1: Mis amigos.
// Probablemente te acuerdes de este ejercicio que ya lo hemos trabajado antes, pues ahora
// filtraremos los amigos con el método filter(). Recuerda que el programa debe filtrar el arreglo
// y devolver uno nuevo con el nombre de sus amigos. Si un nombre tiene exactamente 4
// letras, ¡puedes estar seguro que es amigo tuyo! De lo contrario, no lo son.
// const amigo = [“Ryan”, “Kieran”, “Mark”, “Miguel”]
// El resultado esperado es [“Ryan”, “Mark”]


// Declaramos la constante friends
const friends = ["Ryan", "Kieran", "Mark", "Miguel"]

// La función filter() recorre cada elemento del arreglo, si hay un true muestra el arreglo si hay un false lo descarta.
const mejores = friends.filter(friend => friend.length === 4); /* funcion arroW (con el nombre de la const."filter") */
// Lo puse en ingles por que me estaba dando error con el codigo de arriba.

// Console log que da el resultado.
console.log("Tus amigos son: " + mejores);


// EJERCICIO 2: Corrigeme la frase.
// Tenemos un arreglo llamado frases con varias sentencias al azar. Usá la función map() para
// que cada frase empiece y termine con signos de exclamación.
// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
// El resultado esperado es:
// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem
// amet.!' ]


// Declaramos la constante frases.
const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// Declaramos otra constante, con el metodo map recorremos cada elemento de "frases" y aplicamos una funcion.
const frasesExclamadas = frases.map(function(dichos) {
    /*la function dichos le decimos que retorne con "!¡".  */
    return '¡' + dichos + '!';
});

// Aca un console log que muestra el resultado
console.log(frasesExclamadas);