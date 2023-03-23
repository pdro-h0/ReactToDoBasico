import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 62.5%;
    }

    *{
        padding: 0;
        margin: 0;

        box-sizing: border-box;
    }

    body, input, textarea, button{
        font-size: 1.6rem;
        font-family: Arial, Helvetica, sans-serif;

    }

    .hide{
        display: none !important;
    }
`