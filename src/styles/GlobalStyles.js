import { createGlobalStyle } from 'styled-components';

export const theme = {
    // Colors
    white: '#fff',
    black: '#000',

    // Background
    buttonBgGradient: 'linear-gradient(90deg, #FF594C 0%, #FAC527 100%)',
    wrapperBgGradient: 'linear-gradient(94.43deg, rgba(249, 249, 249, 0.49) 34.95%, rgba(249, 249, 249, 0.175) 67.01%)',
    buttonWrapperGradient: 'linear-gradient(94.33deg, rgba(255, 255, 255, 0.6) 3.19%, rgba(255, 255, 255, 0.1) 99.26%)',

    // Border radius
    boxRadius: '10px',
};

/* eslint-disable */
const GlobalStyles = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Exo+2:wght@500;700&family=Ubuntu:wght@300;400;700&display=swap');

    *{
        box-sizing: border-box;

    }

    body{
        font-family: 'Dancing Script', cursive;
         font-family: 'Exo 2', sans-serif;
        font-family: 'Ubuntu', sans-serif; 
        margin: 0;
        padding: 0;
    }
    img{
        max-width: 100%;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
    }
    p{
        margin: 0;
    }
    a{
        text-decoration: none;
    }
`;

export default GlobalStyles;