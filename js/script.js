/*
Indice
0. Declaraciones 
1. Clase
2. Array
3. Variables
4. Funciones
5. Eventos
6. Main
*/

/*0. Declaraciones
---------------------------------------------------------------------*/
let contenedorHTML = document.getElementById('contenedorIndex');
let filtroHTML = document.getElementById('filtroIndex');
let productosHTML = document.getElementById('productosIndex');
let publicidadHTML = document.getElementById('publicidadIndex');
let inputSearch = document.getElementById('input-search');
let contenedorCarrito = document.getElementById('contenedorCarrito');
                       
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

class Carrito{
    constructor(id,nombre,valor,cantidad){
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

/*2. Array 
---------------------------------------------------------------------*/
let productosFunkos = [];
let carritoFunkos = [];

/*3. Variables default 
-------------------------------------------------------------------- */
let id = '';
let nombre = "";
let valor = "";
let cantidad = "";
let imagen = "";
let fecha = "";

/*4. Funciones
---------------------------------------------------------------------------------------- */
//Otros
let capitalizar = (texto) => {
    let textoChart = texto.charAt(0).toUpperCase();
    let textoSlice = texto.slice(1);
    let textoConcatenacion = textoChart+textoSlice;
    return textoConcatenacion;
}

/* Funciones clase funko *
----------------------------------------------------------- */
//CRUD Funko
/*
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
        let findFunko = productosFunkos.find((array) => array.id == (funkoIndex+1));
        console.log("Funko:\n");
        for(const valor in findFunko){
            console.log(findFunko[valor]);
        }
    } 
};

let total = () => {
    let acumuluador = 0;

    acumuluador = productosFunkos.reduce((acumulador,elemento) => acumulador+(elemento.valor*elemento.cantidad),0)

    console.log(`El total de los productos es ${acumuluador}`);
}
*/

let mostrarTodosFunkos = (array,contenedor) => {    
    let stringFunko = '';

    array.forEach((producto) => {
        stringFunko += `
        <div class="card" style="width: 12rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <span class="card-text">Stock: ${producto.cantidad}</span>
                    <p class="card-text">Valor: ${producto.valor}</p>
                    <a href="#" onclick='agregarCarrito(${producto.id})' class="btn btn-primary">Añadir al carro</a>
                </div>
      </div>
      `
    });
    contenedor.innerHTML = stringFunko;
}

/* Funciones clase carrito *
---------------------------------------------------------------------------------------------*/
let agregarCarrito = (id) => {
    if(!id){
        window.alert('id no definida');
        console.log('id no definida');
        return
    }

    const producto = productosFunkos.find((el) => el.id === id);

    if(producto){
        let funkoCarrito = new Carrito(producto.id,producto.nombre,producto.valor,1);

            if(carritoFunkos.some((el) => el.id === id)){
               const funkoFind = carritoFunkos.find((el) => el.id === id);
               carritoFunkos = carritoFunkos.filter((el) => el.id !== funkoFind.id);
               carritoFunkos.push(new Carrito(funkoFind.id,funkoFind.nombre,funkoFind.valor,funkoFind.cantidad+1));
    
            }else{
                carritoFunkos.push(funkoCarrito); 
    
            }
    }   
    console.log(carritoFunkos);
};

let busqueda = () => {
    
}

let elimminar = () => {
    
}

let modificar = () => {
    
}

let totalCarrito = () =>{

}

let mostrarCarrito = () => {
    let acumulador = '';
    let iterador = 1;

    carritoFunkos.forEach((el) => {
        acumulador += `
        <tr>
        <td>${iterador}</td>
        <td>${el.id}</td>
        <td>${el.nombre}</td>
        <td>${el.cantidad }</td>
        <td>${el.valor } </td>
        <td>${el.valor*el.cantidad}</td>
        <td>Eliminar(id)|masTarde(id))</td>
        </tr>
        `
        iterador++;
    });

    contenedorCarrito.innerHTML = acumulador;
}

/*5. Eventos
----------------------------------------------------------------------*/
let handlerEvent = (e) =>{

    /* isNan(){
    e.preventdefault();
    }
    */
    
    const filtrado = e.target.value;
    console.log(filtrado);

    const array = productosFunkos.filter((producto) => producto.nombre.includes(capitalizar(filtrado.toLowerCase().trim())))

    mostrarTodosFunkos(array,productosHTML);
}

inputSearch.addEventListener('input', handlerEvent);

/*6. Main
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

/*
do{
    accion = prompt('Indique el numero de la opción: 1) Agregar\n 2)Mostrar todos 0)salir');
    operaciones(accion);
}while(accion !== '0' );
*/

productosFunkos = [{
    id:1,
    nombre: "America Chavez",
    valor: 99999,
    cantidad: 99,
    imagen: 'img/productos/AmericaChavez.webp'
},
{
    id:2,
    nombre: "Bb8",
    valor: 11111,
    cantidad: 11,
    imagen: 'img/productos/Bb8.webp'
},
{
    id:3,
    nombre: "Dr. Strange",
    valor: 22222,
    cantidad: 22,
    imagen: 'img/productos/DrStrange.webp'
},
{
    id:4,
    nombre: "Therizinosaurus",
    valor: 33333,
    cantidad: 33,
    imagen: 'img/productos/Therizinosaurus.webp'
},
{
    id:5,
    nombre: "La cenisienta",
    valor: 44444,
    cantidad: 44,
    imagen: 'img/productos/Lacenisienta.webp'
},
{
    id:6,
    nombre: "Laroca",
    valor: 55555,
    cantidad: 55,
    imagen: 'img/productos/Laroca.webp'
},
{
    id:7,
    nombre: "Rocky",
    valor: 66666,
    cantidad: 66,
    imagen: 'img/productos/Rocky.webp'
},
{
    id:8,
    nombre: "Sulley",
    valor: 66666,
    cantidad: 66,
    imagen: 'img/productos/Sulley.webp'
},
];

mostrarTodosFunkos(productosFunkos,productosHTML)