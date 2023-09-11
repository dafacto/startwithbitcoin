import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-47932806-5"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-47932806-5');
              </script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
					<script async defer src="https://sa.startwithbitcoin.org/latest.js"></script> 
<noscript><img src="https://sa.startwithbitcoin.org/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
