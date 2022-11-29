/*
Indice
0. Declaraciones 
1. Clase
2. Array
3. Variables
4. Funciones
5. Main
*/

/*0. Declaraciones
---------------------------------------------------------------------*/
let contenedorHTML = document.getElementById('contenedorIndex');
let filtroHTML = document.getElementById('filtroIndex');
let productosHTML = document.getElementById('productosIndex');
let publicidadHTML = document.getElementById('publicidadIndex');

/*1. Clase
---------------------------------------------------------------------*/
class Funko{
    constructor(id,nombre,valor,cantidad,imagen,fecha){
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.fecha = fecha || new Date().toLocaleDateString();
    }
}

/*2. Array 
---------------------------------------------------------------------*/
let productosFunkos = [];

/*3. Variables default 
-------------------------------------------------------------------- */
let nombre = "";
let valor = "";
let cantidad = "";
let imagen = "";
let fecha = "";

/*4. Funciones
-------------------------------------------------------------------- */
//Texto
let capitalizar = (texto) => {
    let textoChart = texto.charAt(0).toUpperCase();
    let textoSlice = texto.slice(1);
    let textoConcatenacion = textoChart+textoSlice;
    return textoConcatenacion;
}

//CRUD Funko
let agregarFunkoArray = (capitalizar) => {
    let cantidadFunkos = productosFunkos.length;
    id = cantidadFunkos+1;

    nombre = capitalizar(prompt("Ingresa el nombre del funko").toLowerCase().trim());
    valor = Math.round(parseFloat(prompt("Ingresa el valor del funko")));
    cantidad = parseInt(prompt("Ingresa la cantidad del funko"));
    imagen = prompt("Indicar link de imagen");
    fecha = new Date().toLocaleDateString();

    let productosFunkosAgregar = new Funko(id,nombre,valor,cantidad,imagen,fecha);
    productosFunkos.push(productosFunkosAgregar);
};

let eliminarFunkoArray = () => {
    let nombreFunko = capitalizar(prompt("Indica el nombre del funko").toLowerCase().trim());
    let funkoSome = productosFunkos.some((arreglo) => arreglo.nombre === nombreFunko);

    if(!funkoSome){
        window.alert("Funko no encontrado");
    }else{
        let funkoMap = productosFunkos.map((array) => array.nombre);
        let funkoIndex = funkoMap.indexOf(nombreFunko);
        productosFunkos.splice(funkoIndex,1);
    }
};

let modificarFunkoArray = () => {
    let nombreFunko = capitalizar(prompt("Indica el nombre del funko").toLowerCase().trim());
    let funkoBoolean = productosFunkos.some((el) => el.nombre === nombreFunko);

    if(!funkoBoolean){
        window.alert("No se encuentra el funko");
    }else{
        let funkoMap = productosFunkos.map((array) => array.nombre);
        let funkoIndex = funkoMap.indexOf(nombreFunko);
          
        productosFunkos[funkoIndex]["nombre"] = capitalizar(prompt("Ingresa el nombre del funko").toLowerCase().trim());
        productosFunkos[funkoIndex]["valor"] = Math.round(parseFloat(prompt("Ingresa el valor del funko")));
        productosFunkos[funkoIndex]["cantidad"] = parseInt(prompt("Ingresa la cantidad del funko"));
        productosFunkos[funkoIndex]["imagen"] = prompt("Indicar link de imagen");

    };
};   

let ubicarFunko = (nombreFunko) => {

}
let mostrarUnFunkoArray = () => {
    let nombreFunko = capitalizar((prompt("Indica el nombre del funko").toLowerCase().trim()));
    let funkoBoolean = productosFunkos.some((el) => el.nombre === nombreFunko);

    if(!funkoBoolean){
        window.alert("No se encuentra el funko");
    }else{
        let funkoMap = productosFunkos.map((array) => array.nombre);
        let funkoIndex = funkoMap.indexOf(nombreFunko);
       /* productosFunkos.slice(funkoIndex,(funkoIndex+1)); */
       let findFunko = productosFunkos.find((array) => array.id == (funkoIndex+1));
       console.log("Funko:\n");
       for(const valor in findFunko){
            console.log(findFunko[valor]);
       }
    } 
};

let mostrarTodosFunkos = () => {    
    let stringFunko = '';
    productosFunkos.forEach((productosFunkos) => {
        stringFunko += `
        <div class="card" style="width: 12rem;">
            <img src="${productosFunkos.imagen}" class="card-img-top" alt="${productosFunkos.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${productosFunkos.nombre}</h5>
                    <span class="card-text">Stock: ${productosFunkos.cantidad}</span>
                    <p class="card-text">Valor: ${productosFunkos.valor}</p>
                    <a href="#" class="btn btn-primary">Añadir al carro</a>
                </div>
      </div>
      `
    });
    productosHTML.innerHTML = stringFunko;
}

let total = () => {
    let acumuluador = 0;

    /* Transformarlo a un reduce 
    -----------------------------------------------------------------------------------*/
    for(const funkoTotal of productosFunkos){
        acumuluador += funkoTotal.valor*funkoTotal.cantidad;
    }

    console.log(`El total de los productos es ${acumuluador.toString()}`);
}

/*5. Main
----------------------------------------------------------------------*/
let agregarMas = "";
let accion = "";
let cantidadFunkoAgregar = '';


let operaciones = (accion) =>{
    switch(accion){
        case '1':
            agregarFunkoArray(capitalizar);
        break;
        case '2':
            mostrarTodosFunkos();
        break;
        case '0':
            //Nada
        break;
        default:
            window.alert("Dato incorrecto");
        break;
    }
}

do{
    accion = prompt('Indique el numero de la opción: 1) Agregar\n 2)Mostrar todos 0)salir');
    operaciones(accion);
}while(accion !== '0' );

//eliminarFunkoArray();
//mostrarUnFunkoArray();
//modificarFunkoArray();
//total();
/*
productosFunkos = [{
    id:1,
    nombre: "ketchup",
    valor: 99999,
    cantidad: 99,
    imagen: 'img/productoscompleto/ketchup.jpg'
},
{
    id:2,
    nombre: "Avocado",
    valor: 11111,
    cantidad: 11,
    imagen: 'img/productoscompleto/avocado.png'
},
{
    id:3,
    nombre: "hotdog",
    valor: 22222,
    cantidad: 22,
    imagen: 'img/productoscompleto/hotdog.png'
},
{
    id:4,
    nombre: "Mustard",
    valor: 33333,
    cantidad: 33,
    imagen: 'img/productoscompleto/mustard.png'
},
{
    id:5,
    nombre: "Salchicha",
    valor: 44444,
    cantidad: 44,
    imagen: 'img/productoscompleto/salchicha.png'
},
{
    id:6,
    nombre: "Aceite de oliva",
    valor: 55555,
    cantidad: 55,
    imagen: 'img/productoscompleto/oliveoil.png'
},
{
    id:7,
    nombre: "pepper",
    valor: 66666,
    cantidad: 66,
    imagen: 'img/productoscompleto/pepper.png'
},
{
    id:8,
    nombre: "Sal",
    valor: 66666,
    cantidad: 66,
    imagen: 'img/productoscompleto/sal.png'
},
{
    id:9,
    nombre: "Tomate",
    valor: 66666,
    cantidad: 66,
    imagen: 'img/productoscompleto/tomato.png'
}];
*/
