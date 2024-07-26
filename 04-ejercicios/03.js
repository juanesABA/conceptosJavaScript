function getbyIDx(arr, idx){
    if (arr.length <= idx || idx < 0) {
        return "Este elemento no existe";
    } else {
        return arr[idx];
    }
}

let resultado = getbyIDx([1,2],1);
console.log(resultado)