let pares = [
    [1, {id:1, name: "Nicolas"}],
    [2, {id:2, name: "Felipe"}],
    [3, {id:3, name: "Chanchito"}]
]
let array= [{
    id: 1,
    name: 'Nicolas',
}, {id: 2,
    name: 'Felipe',
}, {id: 3,
    name: 'Chanchito',
}];

function toParis(arr){
    let pairs =  [];
    for (idx in arr){
        let elemento = arr [idx];
        pairs[idx]= [elemento.id, elemento];
    }
    return pairs;
}
resultado = toParis(array);
console.log(resultado)