let i = 2;

while (i < 2){
    if (i % 2 == 0){
        console.log('Número par', i);
    }
    i++;
};

for (let i = 2;i < 2; i++){  // La primera expresion del for es la inicializacion de la variable despues se compara y tercero se incrementa el valor de la variable
    if (i % 2 == 0) {        // inicializada en la primera expresion
        console.log('Número par ', i)
    }
}