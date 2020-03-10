import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
    @font-face {
        font-family: alegreya;
        font-weight: 400;
        src: url("/static/fonts/Alegreya-Regular.ttf") format("truetype");
    }
    @font-face {
        font-family: alegreya;
        font-weight: 500;
        src: url("/static/fonts/Alegreya-Medium.ttf") format("truetype");
    }
    @font-face {
        font-family: alegreya;
        font-weight: 600;
        src: url("/static/fonts/Alegreya-Bold.ttf") format("truetype");
    }
    @font-face {
        font-family: alegreya;
        font-weight: 700;
        src: url("/static/fonts/Alegreya-ExtraBold.ttf") format("truetype");
    }
    @font-face {
        font-family: glegoo;
        font-weight: 400;
        src: url("/static/fonts/Glegoo-Regular.ttf") format("truetype");
    }

    * {
        transiotion: .5s;
    }

    body {
        background-image: url("/static/images/A-Bar-pattern-background.png");
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center; 
    }

    a {
        text-decoration: none;
        transition: .5s;
        & hover {
            text-decoration: underline;
        }   
    }
`;
