

function Usuario(){
    this.id = 1;
    this.recuperarClave = function () {
        console.log('recuperando clave ...'); // Estas funciones pasan a llamarse métodos!
    }
}

let usuario = new Usuario();
console.log(usuario);