// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer", // Los atributos del objeto se muestran en la consola de manera alfabetica
    edad: 16,
};
console.log(personaje); //Mostrar los valores de un objeto
console.log(personaje.nombre); //Mostrar el valor del atributo nombre del objeto manera 1
console.log(personaje['anime']); //Mostrar el valor del atributo nombre del objeto manera 2

personaje.edad = 13; // Para editar el valor dentro de una llave del objeto

let llave = 'edad'; // Para editar el valor dentro de una llave del objeto
personaje[llave] = 18;

delete personaje.anime;
console.log(personaje);