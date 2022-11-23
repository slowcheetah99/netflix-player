import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body{
        font-family: Poppins, Lato, sans-serif;
        background-color: #000;
        -webkit-font-smoothing: antialiased;
        color: #333;
        font-size: 16px;
        margin: 0;
    }
`;
