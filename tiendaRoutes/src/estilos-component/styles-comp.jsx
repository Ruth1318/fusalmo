import styled from "styled-components";
import { Link, NavLink as NL } from "react-router-dom";
import { colors } from "./theme";

export const Button = styled.button`
  background: #bf4f74;
  border-radius: 3px;
  border: 2px solid #f8f8f8;
  color: white;
  font-size: 0.9em;
  margin: 0 1em;
  padding: 0.25 1em;
  cursor: pointer;
  margin-bottom: 0.7em;
`;

export const Buttoon = styled.button`
  background: #f9f3f5;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color:#bf4f74;
  font-size: 0.9em;
  margin: 0 1em;
  padding: 0.25 1em;
  cursor: pointer;
  margin-bottom: 0.7em;
`;

export const StyleLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const BtnLink = styled.button`
  background-color: white;
  padding: 0.9em;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
  margin-right: 0.7em;
  margin-top: 0.7em;
`;

export const StyledNavLink = styled(NL)`
  color: white;
  text-decoration: none;
  padding: 1em;
`;

export const DetailsCont = styled.div`
  background-color: white;
  padding: 1.5em;
  border-radius: 10px;
  margin-top: 1.2em;
  width: 100%;
  margin: 0 auto;
  h3,
  h4 {
    color: black;
  }
`;

export const CenteredCont = styled.div`
  justify-content: center;
  height: 100vh;
  width: 80%;
  margin: 0 auto;
`;
