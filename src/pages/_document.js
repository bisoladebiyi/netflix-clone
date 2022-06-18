import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

 export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheet();

    function handleCollectStyles(MyApp) {
      return props  => {
        return sheet.collectStyles(<MyApp {...props} />);
      };
    }

    const page = ctx.renderPage(MyApp => handleCollectStyles(MyApp));
   
    const styleTags = sheet.getStyleElement();
    return { ...page, ...initialProps, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}