
function numeroImpar(numero){
    let i = 0;

    while (i < numero){
        if (i % 2 !== 0){
            console.log('Número impar: ', i);
        }
        i++;
    }
}

numeroImpar(12);