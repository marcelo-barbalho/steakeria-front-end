import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import BgImage from "../images/bg.jpg"

const GlobalStyle = createGlobalStyle`
* {
  
    margin:0;
    padding: 0;
    outline: 0;
    -webkit-font-smoothing: antialiased;
}

body {
    background: url(${BgImage}) fixed no-repeat;
    background-size:cover;
}

`;

export default GlobalStyle;
