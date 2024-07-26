const user = {id: 1};

user.name = 'Juanes';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

// const user1 = Object.freeze({id : 1}); // el metodo freeze no deja modificar en absolutamente nada el objeto creado
const user1 = Object.freeze({id : 1});  // El metodo seal en un objeto sirve para poder cambiar el valor de sus atributos pero no permite agregar nuevos
user1.name = 'Nico';
user1.id = 2;
console.log(user1);