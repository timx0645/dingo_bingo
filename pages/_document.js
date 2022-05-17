import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    //Style rendering
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) =>
        sheet.collectStyles(<App {...props} />),
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
        <html>
            <Head>
                {this.props.styleTags}
                <meta property="og:type" content="website" />
                <link rel="icon" type="image/png" href="https://hornslethbar.dk/wp-content/uploads/2020/01/hornsleth-favicon-152x152px.png" />
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
            <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin></script>
            <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin></script>
        </html>
        );
    }
}