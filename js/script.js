/*
Indice
0. Declaraciones y localStorage
1. Clase
2. Array
3. Variables
4. Funciones
5. Eventos
6. Main
*/

/*0. Declaraciones y localStorage
---------------------------------------------------------------------*/
//Declaraciones
let contenedorHTML = document.getElementById('contenedorIndex');
let filtroHTML = document.getElementById('filtroIndex');
let productosHTML = document.getElementById('productosIndex');
let publicidadHTML = document.getElementById('publicidadIndex');
let inputSearch = document.getElementById('input-search');
let contenedorCarrito = document.getElementById('contenedorCarrito');

//localStorage y sessionStorage
const carritoStorageVisita = 'carritoVisita';
const carritoStorageMasTarde = 'carritoVisitaMasTarde';
const listaProductos = 'listaProductos';

/*1. Clase
---------------------------------------------------------------------*/
class Funko{
    constructor(id,nombre,valor,cantidad,imagen,fecha){
        this.id = id;
        this.nombre = nombre;
        this.valor = parseInt(valor);
        this.cantidad = parseInt(cantidad);
        this.imagen = imagen;
        this.fecha = fecha || new Date().toLocaleDateString();
    }
}

class Carrito{
    constructor(id,nombre,valor,cantidad){
        this.id = id;
        this.nombre = nombre;
        this.valor = parseInt(valor);
        this.cantidad = parseInt(cantidad);
    }
}

/*2. Array 
---------------------------------------------------------------------*/
let carritoFunkos = [];

let guardarLocal = (propiedad,valor) => { localStorage.setItem(propiedad,valor) }
let guardarSession = (propiedad,valor) => { sessionStorage.setItem(propiedad,valor) }

/*
let recuperarLocal = 
let recuperarSession =
*/

let productosFunkos = [{
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
    valor: 77777,
    cantidad: 77,
    imagen: 'img/productos/Sulley.webp'
},
];

sessionStorage.setItem(listaProductos,JSON.stringify(productosFunkos));

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

    let arrayFunkos = JSON.parse(sessionStorage.getItem(array));
    console.log(arrayFunkos);

    arrayFunkos = arrayFunkos || array;

    let stringFunko = '';

    arrayFunkos.forEach((producto) => {
        
        const { id:funkoId, 
            nombre:funkoNombre, 
            valor:funkoValor, 
            cantidad:funkoCantidad,
            imagen:funkoImagen} = producto;

        stringFunko += `
        <div class="card" style="width: 21rem;">
            <img src="${funkoImagen}" class="card-img-top" alt="${funkoNombre}">
                <div class="card-body">
                    <h3 class="card-title">${funkoNombre}</h5>
                    <span class="card-text">Stock: ${funkoCantidad}</span>
                    <p class="card-text">Valor: ${funkoValor}</p>
                    <a href="#" onclick='agregarCarrito(${funkoId})' class="btn btn-primary">Añadir al carro</a>
                </div>
      </div>
      `
    });

    contenedor.innerHTML = stringFunko;
}

/* Funciones clase carrito *
---------------------------------------------------------------------------------------------*/
const agregarCarrito = (id) => {
    
    const arrayFunkos = JSON.parse(sessionStorage.getItem(listaProductos));
    const carroVisita = JSON.parse(localStorage.getItem(carritoStorageVisita));
/*-------------------------------------------------------&& - || - ? -------------------------------------------------------*/    
    if(!id){
        window.alert('id no definida');
        console.log('id no definida');
        return
    }
/*-------------------------------------------------------&& - || - ? -------------------------------------------------------*/
    const producto = arrayFunkos.find((el) => el.id === id);
/*-------------------------------------------------------&& - || - ? -------------------------------------------------------*/
    if(producto){
        let funkoCarrito = new Carrito(producto.id,producto.nombre,producto.valor,1);

            if(!carroVisita){
                carritoFunkos.push(funkoCarrito); 
                localStorage.setItem(carritoStorageVisita,JSON.stringify(carritoFunkos));

            }else{
                if(carroVisita.some((el) => el.id === id)){
                    const funkoFind = carroVisita.find((el) => el.id === id);
                    carritoFunkos = carroVisita.filter((el) => el.id !== funkoFind.id);
                    carritoFunkos.push(new Carrito(funkoFind.id,funkoFind.nombre,funkoFind.valor,funkoFind.cantidad+1));
     
                    localStorage.setItem(carritoStorageVisita,JSON.stringify(carritoFunkos));

                 }else{
                     carritoFunkos.push(funkoCarrito); 
                     localStorage.setItem(carritoStorageVisita,JSON.stringify(carritoFunkos));
                 }
            }
    }  
/*-------------------------------------------------------&& - || - ? -------------------------------------------------------*/ 
    console.log(carritoFunkos);
    console.log(JSON.parse(localStorage.getItem(carritoStorageVisita)));
};

const mostrarCarrito = () => {

    let carritoVisitaLocal = JSON.parse(localStorage.getItem(carritoStorageVisita));

    let acumulador = '';
    let iterador = 1;

    carritoVisitaLocal.forEach((el) => {

        const { id:funkoId, 
            nombre:funkoNombre, 
            valor:funkoValor, 
            cantidad:funkoCantidad} = el;

        acumulador += `
        <tr>
        <td>${iterador}</td>
        <td>${funkoId}</td>
        <td>${funkoNombre}</td>
        <td>${funkoCantidad}</td>
        <td>${funkoValor} </td>
        <td>${funkoValor*funkoCantidad}</td>
        <td><button onclick='eliminar(${funkoId})'><i class="fa-solid fa-trash"></i></button>|<button onclick='masTarde(${funkoId})'>
        <i class="fa-regular fa-clock"></i></button></td>
        </tr>
        `
        iterador++;
    });
    
    contenedorCarrito.innerHTML = acumulador;
}

const eliminar = (id) => {
    const carroVisita = JSON.parse(localStorage.getItem(carritoStorageVisita))

    const funkoEncontrado = carroVisita.find((el) => el.id === id);
    
    if(funkoEncontrado){
        
        let indexFunko = carroVisita.findIndex((el) => el.id === id);
        
        if(carroVisita[indexFunko].cantidad === 0){
            carroVisita.splice(indexFunko,1);
            localStorage.setItem(carritoStorageVisita,JSON.stringify(carroVisita));
            mostrarCarrito();
            return
        }
        
        carroVisita[indexFunko].cantidad-= 1; 
        
        if(carroVisita[indexFunko].cantidad === 0){
            carroVisita.splice(indexFunko,1); 
            localStorage.setItem(carritoStorageVisita,JSON.stringify(carroVisita));
            mostrarCarrito();
        }else{
            localStorage.setItem(carritoStorageVisita,JSON.stringify(carroVisita));
            mostrarCarrito();
        }
        
        limpiarArrayLocalStorage(carritoStorageVisita);
    }
}

const limpiarArrayLocalStorage = (array) => {
    let arrayExtraido = JSON.parse(localStorage.getItem(array));

    !arrayExtraido.length && localStorage.removeItem(array),carritoFunkos = [];     
}

const arrayVisitaMasTarde = () => {}
/*
const masTarde = (id) => {
    const carroVisita = JSON.parse(localStorage.getItem(carritoStorageVisita));
    const carromasTarde = JSON.parse(localStorage.getItem(carritoStorageMasTarde));
    //Encuentro index
    let indexFunko = carroVisita.findIndex((el) => el.id === id);
    //Extraigo el funko deseado
    let sliceFunko = carritoFunkos.slice(indexFunko,(indexFunko+1));
    //Creo un array con sin el funko desaeado
    const filterFunko = carroVisita.filter((el) => el.id !== sliceFunko[0].id);
    carritoFunkos = filterFunko;
    
    localStorage.setItem(carritoStorageVisita,JSON.stringify(filterFunko));
    mostrarCarrito();
        
}
*/

const busqueda = () => {
}
    
const modificar = () => {
}

const totalCarrito = () =>{
}

/*5. Eventos
----------------------------------------------------------------------*/
let handlerEvent = (e) =>{
    const arrayFunkosEvent = JSON.parse(sessionStorage.getItem(listaProductos));
    /* isNan(e.target.value){
    e.preventdefault();
    }
    */
    
    const filtrado = e.target.value;

    let array = arrayFunkosEvent.filter((producto) => producto.nombre.toLowerCase().includes(filtrado.toLowerCase().trim()));

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

mostrarTodosFunkos(listaProductos,productosHTML);