let herramienta1 = {nombre:"Martillo",descripcion:"Sirve para martillear",repara:1,garantia:1};
let herramienta2 = {nombre:"Destornillador",descripcion:"Sirve para desatornillar",reparado:4,garantia:4};
let herramienta3 = {nombre:"Sierra",descripcion:"Sirve para serrar",repara:0,garantia:3};
let herramienta4 = {nombre:"Taladro",descripcion:"Sirve para taladrar",repara:10,garantia:2};
let herramienta5 = {nombre:"Tijeras",descripcion:"Sirve para cortar",repara:2,garantia:0};


let listaHerramientas = [
    herramienta1,
    herramienta2,
    herramienta3,
    herramienta4,
    herramienta5,
];

function ejercicio3() {

    listadoHerramientas.
    filter(x => x.garantia < 3)
        .sort( x => x.repara.descent)
        .filter(x => x.repara)
        .map( x => x.nombre.toUpperCase()+"-"+x.descripcion.toUpperCase() );

    console.log(listaHerramientas);
}