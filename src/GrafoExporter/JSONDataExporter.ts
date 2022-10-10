import Grafo  from "../domains/Grafo"
import Nodo  from "../domains/Nodo"
import StringBuilder from "./StringBuilder"


import GrafoExporter from "./GrafoExporter";

class JSONDataExporter extends GrafoExporter {
    
    parseGraph(grafo: Grafo): string {   
        let  sb = new StringBuilder();
        sb.append("{ \n");
        sb.append("\"DATA\":{\n");
        grafo.nodos.forEach(e => {
            sb.append("\"");
            sb.append(e.functInfoGeo());
            sb.append("\"");
            sb.append(":{ \n");
            e.getEnlaces().forEach(x => {
                sb.append("\"Enlace");
                sb.append("\"");
                sb.append(":{ \n");
                sb.append("\"Origen\":");
                sb.append("\"");
                sb.append(x.origen.functInfoGeo());
                sb.append("\"");
                sb.append(", \n");
                sb.append("\"Destino\":");
                sb.append("\"");
                sb.append(x.origen.functInfoGeo());
                sb.append("\"");
                sb.append("\n");
                sb.append("} \n");
            });
            sb.append("}, \n");
        });
        sb.append("} \n");
        sb.append("} \n");
        return sb.toString()
        
    }
    
}

export default  JSONDataExporter;