import React from "react";
import "./App.css";
import {
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
  NavLink as NL,
  NavLink,
} from "react-router-dom";
import {
  Button,
  BtnLink,
  DetailsCont,
  CenteredCont,
  Buttoon,
} from "./estilos-component/styles-comp";
import dataCelu from "./data/dataCelu";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Celulares from "./components/Celulares";
import CelularDetails from "./components/CelularDetails";
import NvLink from "./components/NavLink";








//Componente para los detalles del celular seleccionado


//componente para encapsular todo lo de NavLink


function App() {
  return (
    <div>
      <header>
        <h1>LOGO</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search-page">Pagina de busqueda</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <CenteredCont>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/Celulares/:nameCelular" element={<Celulares />}>
            <Route path="details" element={<CelularDetails />} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </CenteredCont>
    </div>
  );
}

export default App;
