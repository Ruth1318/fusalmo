import React from "react";
import { Link,Outlet } from "react-router-dom";
import { Buttoon } from "../estilos-component/styles-comp";
import dataCelu from "../data/dataCelu";



const Celulares = ({nameCelular}) => {
   
  
    return (
      
        <div className="features">
          <h2>celulares info</h2>
          {nameCelular}
          <Link to="details">
            <Buttoon>Ver detalles</Buttoon>
          </Link>
          <Outlet />
        </div>
      
    );
  };

  export default Celulares;