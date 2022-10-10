import React, { useEffect, useState } from 'react';
import Grafo from './domains/Grafo';

import { Button } from 'react-bootstrap';
import Industria from './domains/Industria';
import Ciudad from './domains/Ciudad';
import LugarTurismo from './domains/LugarTurismo';
import Enlace from './domains/Enlace';
import GrafoExporter from './GrafoExporter/GrafoExporter';
import JSONDataExporter from './GrafoExporter/JSONDataExporter';

function TiendaComponent() {
  const [grafo, setGrafo] = useState<Grafo>();
  /* ------------------------------- INITIZLIZE ------------------------------- */

  useEffect(() => {
    //NODOS
    let n1 = new Industria();
    let n2 = new Ciudad();
    let n3 = new LugarTurismo();

    //ENLACES
    let e1 = new Enlace(n2, n3);
    let e2 = new Enlace(n3, n1);

    //GRAFO
    let grafo = new Grafo([e1, e2], [n1, n2, n3]);

    setGrafo(grafo);
  }, []);

  return (
    <div>
      <Button onClick={() => {}} variant="primary">
        Export XML
      </Button>

      <Button
        onClick={() => {
          //PARSE
          let grafoExporterJSON = new JSONDataExporter();

          let parsedJSONGraph = grafoExporterJSON.parseGraph(
            grafo || new Grafo([], [])
          );

          grafoExporterJSON.export(parsedJSONGraph, 'json.json', 'text/plain');
        }}
        variant="primary"
      >
        Export JSON
      </Button>
    </div>
  );
}

export default TiendaComponent;
