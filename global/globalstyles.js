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

    @font-face {
        font-family:"loslana-niu-pro";
        src:url("https://use.typekit.net/af/c05561/00000000000000003b9b045f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/c05561/00000000000000003b9b045f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/c05561/00000000000000003b9b045f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:300;font-stretch:normal;
    }

    @font-face {
        font-family:"loslana-niu-pro";
        src:url("https://use.typekit.net/af/2d8920/00000000000000003b9b0460/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/2d8920/00000000000000003b9b0460/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/2d8920/00000000000000003b9b0460/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
    }

    @font-face {
        font-family:"loslana-niu-pro";
        src:url("https://use.typekit.net/af/8cfaa1/00000000000000003b9b0461/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/8cfaa1/00000000000000003b9b0461/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/8cfaa1/00000000000000003b9b0461/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
    }

    * {
        transiotion: .5s;
    }

    body {
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center; 
        background:
        linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ),
        url("/static/images/fyal.jpg");
    }
    }

    a {
        text-decoration: none;
        transition: .5s;
        & hover {
            text-decoration: underline;
        }   
    }
`;
