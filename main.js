let nombre = prompt('Bienvenido, ingresa tu nombre')
    alert('Hola '+nombre)
let edad = prompt('¿Cuántos años tienes?')
if(edad >18){
    alert('Eres mayor de edad')
}else{
    alert('Eres menor de edad')
}
console.log(nombre)
console.log(edad)

for(let i=0; i<101; i++){
    alert(Eres la persona numero '+ i + ' en ingresar a la pagina')
}

let precioGranulado = 600
let precioPulverizado = 750 

const SUMA = function(a+b+c){return a + b+ c}
function sumaProductos(a,b){
    let total = a+b
    return total
}

function mostrarTotal (total){
    alert('El costo de los productos seleccionados es '+total)
}
//INSERTAR UN SWITCH COMO MENU PARA QUE SELECCIONENLO QUE QUIEREN y al final les haga la suma y les arroje el total 
//idea: menu que calcule el total a pagar del cliente respecto a los articulos que selecciono
