import React from "react";
import { Link } from "react-router-dom";
import {ThemeProvider} from "styled-components"
import { Button, CenteredCont } from "../estilos-component/styles-comp";

const Home = () => {
    return (
      <CenteredCont className="features">
        <h2>Bienvenido</h2>
        <p>Somos una tienda de celulares</p>
        <Link to="/SearchPage">
          <Button>Ver mas</Button>
        </Link>
      </CenteredCont>
    );
  };

  export default Home;