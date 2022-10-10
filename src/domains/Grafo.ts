import Nodo from "./Nodo"
import Enlace from "./Enlace"

class Grafo{
    enlaces : Array<Enlace> = [];
    nodos : Array<Nodo> = [];


    constructor(enlaces: Array<Enlace>, nodos:Array<Nodo>){
        this.enlaces = enlaces
        this.nodos = nodos
    }
}

export default Grafo;