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

let precioGranulado = 450
let precioPulverizado = 650 

function sumaProductos(a,b){
    return a+b 
}
    let resultado= sumaProductos(precioGranulado, precioPulverizado )
    console.log(resultado)

function mostrarTotal (total){
    alert('El costo de los productos seleccionados es '+total)
}
    console.log(mostrarTotal)

let opciones = 
do{
    opciones = parseInt(prompt('Elige el producto que deseas adquirir: \n1.-Caucho Granulado \n2.-Caucho Pulverizado \n3.-Salir'))

switch (opciones){
    case 1:
        alert('Caucho Granulado')
        break;
    case 2: 
        alert('Caucho Pulverizado')
        break;
    case 3:
        alert('Salir')
        break;
    default: 
        alert('Opción inválida')
}
}

//idea: menu que calcule el total a pagar del cliente respecto a los articulos que seleccionó
