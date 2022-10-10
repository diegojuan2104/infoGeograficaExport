import Nodo from "./Nodo"

class Enlace {
    origen: Nodo;
    destino: Nodo;

    constructor(destino: Nodo,origen: Nodo ) {
        this.origen = origen;
        this.destino = destino;
        this.origen.getEnlaces().push(this);
        this.destino.getEnlaces().push(this);
    }
}

export default  Enlace;