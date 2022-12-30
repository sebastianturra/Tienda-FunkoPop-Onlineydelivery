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
let modalIndex = document.getElementById('exampleModal');
let containerListadoMonedas = document.getElementById('containerListadoMonedas');

const spinner = `<div class="d-flex justify-content-center m-auto">
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>`

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

let recuperarLocal = (propiedad) => JSON.parse(localStorage.getItem(propiedad))
let recuperarSession = (propiedad) => JSON.parse(sessionStorage.getItem(propiedad)) 

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

guardarSession(listaProductos,JSON.stringify(productosFunkos));

/* Promise, fetch y aync await
--------------------------------------------------------------------------*/
let productosPromesa = new Promise( (resolve,rejected) => {
    return setTimeout(()=>{
        !recuperarSession(listaProductos).length ? rejected([{
            id:1,
            nombre: "America Chavez",
            valor: 99999,
            cantidad: 99,
            imagen: 'img/productos/AmericaChavez.webp'
        }]) : resolve(recuperarSession(listaProductos))
    },6000)
} )

console.log(productosPromesa)

let productosFunkosPromesa = ''
let fetchMonedas = ''
let acumuladorMonedas = ''
let arrayMonedasRequeridas = ['dolar','euro','uf','utm']
let contadorInicial = 0;
let contadorFinal = 4;
let monedaArray = []
let obtenerMonedas = async () => {
    fetchMoneda = await fetch('https://mindicador.cl/api')
    let monedaJson = await fetchMoneda.json();
        for(let i = 0 ; i < contadorFinal ; i++){
            acumuladorMonedas += `<tr><td>${monedaJson[arrayMonedasRequeridas[i]].codigo}</td><td>${monedaJson[arrayMonedasRequeridas[i]].valor}</td></tr>`
        }
        containerListadoMonedas.innerHTML = acumuladorMonedas
    }

obtenerMonedas()
/*3. Variables default 
-------------------------------------------------------------------- */
let id = '';
let nombre = "";
let valor = "";
let cantidad = "";
let imagen = "";
let fecha = "";
let stringFunko = '';

/*4. Funciones
---------------------------------------------------------------------------------------- */
/* Promesas
------------------------------------------------------------*/
const getProductos = () => {
    productosHTML.innerHTML=spinner;
    productosPromesa
    .then((res) => {
        productosFunkosPromesa = [...res]
            mostrarTodosFunkos(productosFunkosPromesa,productosHTML)
        })
    .catch((rej)=>{
        productosHTML.innerHTML=spinner;
        productosFunkosPromesa = [...rej]
            mostrarTodosFunkos(productosFunkosPromesa,productosHTML)
    }) 
    .finally(()=>{
        console.log('Promesa completada')
    })   
}

/* Funciones clase funko *
----------------------------------------------------------- */
let mostrarTodosFunkos = (array,contenedor) => {  
    
    let arrayFunkos = recuperarSession(array);

    arrayFunkos = arrayFunkos || array;

    stringFunko = '';

    arrayFunkos.forEach((producto) => {
        mostrarCard(producto);
    });

    contenedor.innerHTML = stringFunko;
}

const mostrarCard = (producto) => {
    const { id:funkoId, 
        nombre:funkoNombre, 
        valor:funkoValor, 
        cantidad:funkoCantidad,
        imagen:funkoImagen} = producto;

    stringFunko += `
    <div class="card" style="width: 15rem;">
        <img src="${funkoImagen}" class="card-img-top" alt="${funkoNombre}">
            <div class="card-body">
                <h3 class="card-title">${funkoNombre}</h3>
                <span class="card-text">Stock: ${funkoCantidad}</span>
                <p class="card-text">Valor: ${funkoValor}</p>
                <a href="#" onclick='agregarCarrito(${funkoId})' class="btn btn-primary">Añadir al carro</a>
            </div>
  </div>
  `
}

/* Funciones clase carrito *
---------------------------------------------------------------------------------------------*/
const agregarCarrito = (id) => {
    
    const arrayFunkos = recuperarSession(listaProductos)
    const carroVisita = recuperarLocal(carritoStorageVisita) 

    if(!id){
        window.alert('id no definida');
        console.log('id no definida');
        return
    }

    const producto = arrayFunkos.find((el) => el.id === id);

    if(producto){

        const {id:idProducto,nombre:nombreProducto,valor:valorProducto} = producto

        let funkoCarrito = new Carrito(idProducto,nombreProducto,valorProducto,1);
        verificadorExistenciaProductoCarrito(id,carroVisita,funkoCarrito);      
    }  
};

const verificadorExistenciaProductoCarrito = (id,carroVisita,funkoCarrito) => {
    console.log('carroVisita')
    console.log(carroVisita)
    if(!carroVisita){
        carritoFunkos.push(funkoCarrito); 
        localStorage.setItem(carritoStorageVisita,JSON.stringify(carritoFunkos));
        alertAgregadoCarrito()
    }else{
        if(carroVisita.some((el) => el.id === id)){
            const funkoFind = carroVisita.find((el) => el.id === id); 

            const {id:idProducto,nombre:nombreProducto,valor:valorProducto,cantidad:cantidadProducto} = funkoFind

            carritoFunkos = carroVisita.filter((el) => el.id !== idProducto); 
            carritoFunkos.push(new Carrito(idProducto,nombreProducto,valorProducto,cantidadProducto+1));

            localStorage.setItem(carritoStorageVisita,JSON.stringify(carritoFunkos));
            console.log('carritoStorageVisita')
            alertAgregadoCarrito()
         }else{
             carritoFunkos = recuperarLocal(carritoStorageVisita) || [];
             carritoFunkos.push(funkoCarrito); 
             localStorage.setItem(carritoStorageVisita,JSON.stringify(carritoFunkos));
             console.log('carritoStorageVisita')
             alertAgregadoCarrito()
         }
    }
}

const mostrarCarrito = () => {

    let carritoVisitaLocal = recuperarLocal(carritoStorageVisita);

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
        <td><button onclick='eliminar(${funkoId})'><i class="fa-solid fa-trash"></i></td>
        </tr>
        `
        iterador++;
    });
    
    contenedorCarrito.innerHTML = acumulador;
}

const eliminar = (id) => {
    const carroVisita = recuperarLocal(carritoStorageVisita)

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
    let arrayExtraido = recuperarLocal(array);

    !arrayExtraido.length && localStorage.removeItem(array),carritoFunkos = [];     
}
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

const totalCarrito = () =>{
}
const alertAgregadoCarrito = () => {
    Swal.fire({
        
        title: 'Agregado',
        text: 'Agregado con exito al carrito',
        icon:'success',
        
        showCancelButton: true,
        confirmButtonText: 'Ir al carrito',
        cancelButtonText: 'Seguir agregando',

        background: '#ffff',
        color: '#000f'
    })
    .then((promesa)=>{
        console.log(promesa)
        if(promesa.isConfirmed){
            modalIndex.addEventListener('shown.bs.modal', function () {
                    
              })
        }
        if(promesa.isDismissed){
            Swal.fire({
                title: 'De vuelta',
                text: 'Volviendo a home',
                timer: 1000,
                showConfirmButton: false
            })
        }
     })
}

/*5. Eventos
----------------------------------------------------------------------*/
let handlerEvent = (e) =>{
    const arrayFunkosEvent = JSON.parse(sessionStorage.getItem(listaProductos));
    
    const filtrado = e.target.value;

    let array = arrayFunkosEvent.filter((producto) => producto.nombre.toLowerCase().includes(filtrado.toLowerCase().trim()));

    mostrarTodosFunkos(array,productosHTML);
}

inputSearch.addEventListener('input', handlerEvent);

/*6. Main
----------------------------------------------------------------------*/
getProductos()