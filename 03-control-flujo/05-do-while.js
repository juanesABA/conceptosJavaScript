let i = 0;
while(i < 10){                         // El while evalua primero si la condicion es verdadera para comenzar a iterar
    if (i % 2 == 0){
        console.log('Número par', i);
    }
    i++;
}
do{                                    // El do while se aegura de hacer una itereación para acto seguidor encontrarse con la condicion y validar si es verdadera o falsa    
    if (i % 2 == 0){                   //  para comenzar con las itereción   
        console.log('Número par', i);
    }
    i++;
} while (i < 10);