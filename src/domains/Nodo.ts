import Enlace from "./Enlace"

abstract class Nodo {
    estadoComun: any;
    enlaces: Array<Enlace> = [];

    constructor(estadoComun?: any){
        this.estadoComun = estadoComun;
        this.enlaces = [] ;
    }

    getEnlaces() : Array<Enlace> {
        return this.enlaces
    }

    abstract functInfoGeo() : string;

}

export default Nodo;