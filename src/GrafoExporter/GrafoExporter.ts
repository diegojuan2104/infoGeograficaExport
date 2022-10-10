import Grafo from "../domains/Grafo"

abstract class GrafoExporter {
   abstract parseGraph(grafo: Grafo):string;


    export(content:string, fileName:string, contentType:string){
       try {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
       } catch (error) {
        console.log(error);
       }
   };
}

export default  GrafoExporter