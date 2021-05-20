// Third Party
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const LANG = 'en';

export default class ShibaDoc extends Document {
  // eslint-disable-next-line
  render() {
    return (
      <Html lang={LANG}>
        <Head>
          <link
            // eslint-disable-next-line max-len
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;900&family=Source+Code+Pro:wght@200;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="isLoading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
