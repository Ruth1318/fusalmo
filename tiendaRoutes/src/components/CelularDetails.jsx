import React from "react";

import {useParams} from "react-router-dom";
import { DetailsCont } from "../estilos-component/styles-comp";
import dataCelu from "../data/dataCelu";



const CelularDetails = () => {
    const { nameCelular } = useParams();
    const detalles = dataCelu[nameCelular];
  
    return (
      <DetailsCont>
        <h3>Detalles del movil {nameCelular}</h3>
        <h4>Modelo: {detalles.modelo}</h4>
        <h4>Precio: {detalles.precio}</h4>
        <h4>Descripcion: {detalles.desc}</h4>
      </DetailsCont>
    );
  };

  export default CelularDetails;