// restar(a, b) Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos.

// const num1 = Number(prompt('Ingrese un número:'));
// const num2 = Number(prompt('Ingrese el número que desee restarle:'));

// const resta = (num1, num2) => {
//     return num1 - num2;
// };

// const resultado = resta(num1, num2);
// alert(resultado);



// multiplicar(a, b) Crear una función multiplicar que tome como argumentos dos números y devuelva la multiplicación de ellos

// const num1 = Number(prompt('Ingrese un número:'));
// const num2 = Number(prompt('Ingrese el número por el que desea multiplicarlo:'));

// const multiplicar = (num1, num2) => {
//     return num1 * num2;
// };

// const resultado = multiplicar(num1, num2);
// alert(resultado);



//dividir(a, b) Crear una función dividir que tome como argumentos dos números y devuelva la suma de ellos

// const num1 = Number(prompt('Ingrese un número:'));
// const num2 = Number(prompt('Ingrese el número por el cual lo desea dividir:'));

// const dividir = (num1, num2) =>{
//     return num1 / num2
// }

// const resultado = dividir(num1,num2);
// alert(resultado);



//esPar(numero) Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es
//TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

// const numeroUsuario = Number(prompt('Ingrese el número que desea saber si es par:'));

// const esPar = (numeroUsuario) => {
//     return numeroUsuario % 2;
// };

// const resultado = esPar(numeroUsuario) === 0;
// alert(resultado);



//esImpar(numero) Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es

// const numeroUsuario = Number(prompt('Ingrese el número que desea saber si es impar:'));

// const esImpar = (numeroUsuario) => {
//     return numeroUsuario % 2;
// };

// const resultado = esImpar(numeroUsuario) != 0;
// alert(resultado);



// calcularAreaTriangulo(base, altura) Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

// const baseTriangulo = Number(prompt('Ingrese la base del triángulo:'));
// const alturaTriangulo = Number(prompt('Ingrese el altura del triángulo:'));

// const calcularAreaTriangulo = (baseTriangulo, alturaTriangulo) => {
//     return baseTriangulo * alturaTriangulo / 2;
// };

// const resultado = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
// alert(resultado);



// gritar(str) Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

// const textoUsuario = prompt('Ingrese el texto que desea gritar:');

// const gritar = (textoUsuario) => {
//     return `¡¡${textoUsuario}!!`
// };

// const resultado = gritar(textoUsuario);
// alert(resultado);



//obtenerNombreCompleto(nombre, apellido) Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

// const nombre = prompt('Ingrese su nombre:');
// const apellido = prompt('Ingrese su apellido:');

// const obtenerNombreCompleto = (nombre, apellido) => {
//     return nombre + ' ' + apellido;
// };

// const nombreCompleto = obtenerNombreCompleto(nombre, apellido);
// alert('Su nombre completo es: ' + nombreCompleto);



//saludarGritando(nombre, apellido) Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

// const nombre = prompt('Ingrese su nombre:');
// const apellido = prompt('Ingresar su apellido:');

// const nombreCompleto = (nombre, apellido) => {
//     return `¡¡Hola ${nombre} ${apellido}, bienvenido!!`
// };

// const saludarGritando = nombreCompleto(nombre, apellido);

// alert(saludarGritando);



// obtenerDatosDeCiudad(nombre, poblacion, pais) Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS


// const nombreCiudad = prompt('Ingrese el nombre de su ciudad:');
// const numeroPoblacion = Number(prompt('Ingresar el número de población:'));
// const pais = prompt('Ingrese el nombre de su país:');

// const obtenerDatosCiudad = (nombreCiudad, numeroPoblacion, pais) => {
//     return `La ciudad de ${nombreCiudad} tiene una población de ${numeroPoblacion} habitantes, y está ubicada en ${pais}.`;
// };

// const datosCiudad = obtenerDatosCiudad(nombreCiudad,numeroPoblacion, pais);
// alert(datosCiudad);



//convertirHorasEnSegundos(horas) Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

// const horas = Number(prompt('Ingresa las horas:'));

// convertirHorasSegundos = (horas) => {
//     return (horas * 60)* 60;
// };

// const resultado = convertirHorasSegundos(horas);
// alert(`Son ${resultado} segundos.`);



//calcularPerimetroRectangulo(ancho, alto) Crear una función calcularAreaTriangulo que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro

// const ancho = Number(prompt('Ingresar el ancho del rectángulo:'));
// const alto = Number(prompt('Ingresar el alto del rectángulo:'));


// const calcularPerimetroRectangulo = (alto, ancho) => {
//     return (alto * ancho) *2;
// };

// const resultado = calcularPerimetroRectangulo(alto, ancho);
// alert(`El área del rectángulo es ${resultado}.`);



// calcularPorcentaje(numero, porcentaje) Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número

// const numero = Number(prompt('Ingresar un número:'));
// const porcentaje = Number(prompt('Ingresar un porcentaje:'));

// const calcularPorcentaje = (numero, porcentaje) => {
//     return (numero * porcentaje) / 100;
// };

// const resultado = calcularPorcentaje(numero, porcentaje);

// alert(resultado);
















