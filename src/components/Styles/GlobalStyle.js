import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
    }
 
    body{
        background: ${({theme}) => theme.colors.body};
        color: white;
        font-family: 'Merienda', cursive;
        font-size: 1.15em;
        margin: 0;
    }

    p{
        opacity: 0.9;
        line-height: 1.5;
        color: black;
    }

    img{
        max-width: 100%;
    }
`

export default GlobalStyle ;