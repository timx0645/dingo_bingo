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
                <meta name="robots" content="index,nofollow" />    
                <link rel="icon" type="image/png" href="/static/images/favicon.png" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </html>
        );
    }
}