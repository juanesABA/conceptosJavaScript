let user = {
    id: 1,
    email: 'juanes@holamundo.io',
    name: 'Juanes',
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave ...')
    }
}



function crearUsuario(name, email) {
    return {
        email: email,
        name: name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave ...')
        }
    }
}

let user1 = crearUsuario('Felipe', 'Felipe@holamundo.io');
let user2 = crearUsuario('Juanes', 'juanes@holamundo.io');

console.log(user1);
console.log(user2);