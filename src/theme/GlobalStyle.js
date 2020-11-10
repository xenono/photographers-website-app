import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800,900&display=swap');
    *,*&{
        box-sizing: border-box;
    }
    html{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat',sans-serif;
        font-size: 62.5%;
    }
    body {
        margin: 0;
        padding: 0;
    }
    @media (max-width: 1920px){
      html {
            font-size: 9px;
      }
    }
    @media (max-width: 1440px){
      html {
            font-size: 8px;
      }
    }
    @media (max-width: 1090px){
      html {
            font-size: 7px;
      }
    }
    @media (max-width: 900px){
      html {
            font-size: 6px;
      }
    }
    @media (max-width: 780px){
      html {
            font-size: 5.5px;
      }
    }

`;

export default GlobalStyle;
