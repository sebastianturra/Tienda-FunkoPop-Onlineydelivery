/*
Indice
1. Clase
2. Array
3. Variables
4. Funciones
5. Main
*/

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

    mostrarTodosFunkos();
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

        mostrarTodosFunkos();
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

        mostrarTodosFunkos();
          
        productosFunkos[funkoIndex]["nombre"] = capitalizar(prompt("Ingresa el nombre del funko").toLowerCase().trim());
        productosFunkos[funkoIndex]["valor"] = Math.round(parseFloat(prompt("Ingresa el valor del funko")));
        productosFunkos[funkoIndex]["cantidad"] = parseInt(prompt("Ingresa la cantidad del funko"));
        productosFunkos[funkoIndex]["imagen"] = prompt("Indicar link de imagen");

        mostrarUnFunkoArray();
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
    /* Cambiar por forEach 
    -----------------------------------------------------------*/
    let stringFunko = '';
    for(const conteoFunkos of productosFunkos){
        stringFunko += `Funko nombre:${conteoFunkos.nombre}\n
        Funko valor:${conteoFunkos.valor}\n
        Funko cantidad:${conteoFunkos.cantidad}\n
        Funko imagen:${conteoFunkos.imagen}\n
        Funko id:${conteoFunkos.id}\n
        Funko fecha:${conteoFunkos.fecha}\n`
    }

    console.log(stringFunko);
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
let cantidadFunkoAgregar = '';

do{
    cantidadFunkoAgregar = parseInt(prompt('Indique cantidad de funkos a agregar'));
    while(cantidadFunkoAgregar === 0 || isNaN(cantidadFunkoAgregar) || cantidadFunkoAgregar < 0 ){
        window.alert("Cantidad minima es 1");
        cantidadFunkoAgregar = parseInt(prompt('Indique cantidad de funkos a agregar'));
    }

    for(let i = 0; i < cantidadFunkoAgregar; i++){
        agregarFunkoArray(capitalizar);
    }
    mostrarTodosFunkos();
    
    agregarMas = prompt("¿Desea agregar más funkos, Sí ó no?").toLowerCase().trim();
    while(agregarMas === ''){
            window.alert('Debe ingresar su respuesta');
            agregarMas = prompt("¿Desea agregar más funkos, Sí ó no?").toLowerCase().trim();
        }
}while(agregarMas !== 'no' );

//mostrarTodosFunkos();
//eliminarFunkoArray();
//mostrarUnFunkoArray();
//modificarFunkoArray();
//total();
/*
productosFunkos.push({id:1,valor:10000,cantidad:10,imagen:"aa",nombre:"a",fecha:"2022/01/01"});
productosFunkos.push({id:2,valor:20000,cantidad:20,imagen:"bb",nombre:"b",fecha:"2022/01/02"});
productosFunkos.push({id:3,valor:30000,cantidad:30,imagen:"cc",nombre:"c",fecha:"2022/01/03"});
*/