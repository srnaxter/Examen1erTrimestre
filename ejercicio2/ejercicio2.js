class Herramienta {
    constructor(nombre, descripcion, reparado, anyos) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.reparado = reparado;
        this.anyos = anyos;
    }

    getHerramienta() {
        return `Se llama ${this.nombre}, ${this.descripcion} y ha sido reparada ${this.reparado} veces.`;
    }

    getHerraBuena() {
        return this.anyos > 5 ?
            `La herramienta es buena` : `La herramienta es mala`;
    }
}

function funcionEjecutar() {
    //Así creamos la herramienta.
    let herramienta = new Herramienta("Martillo", "sirve para martillar", 3, 4);
    console.log(herramienta);

    //Así recibimos el nombre, descripcion y veces reparada y lo imprimimos por consola.
    console.log(herramienta.getHerramienta());

    //Asi vemos si la herramienta es buena o no.
    console.log(herramienta.getHerraBuena());

}