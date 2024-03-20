import React from "react";

import { BtnLink, CenteredCont } from "../estilos-component/styles-comp";
import { Link } from "react-router-dom";



const SearchPage = () => {
    const celulares = ["Samsung", "LG", "Xiaomi", "iPhone"];
  
    return (
      <CenteredCont className="features ">
        <h2>Pagina de busqueda</h2>
        <ul>
          {celulares.map((celular) => (
            <li key={celular}>
              <Link className="lista" to={`/celulares/${celular}`}>
                {" "}
                <BtnLink>{celular}</BtnLink>{" "}
              </Link>
            </li>
          ))}
        </ul>
      </CenteredCont>
    );
  };

  export default SearchPage;
  