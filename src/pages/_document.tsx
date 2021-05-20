/* eslint-disable max-len */
// Third Party
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

import { colors } from '../../global/config/style/index.js';

const LANG = 'en';

export default class ShibaDoc extends Document {
  // eslint-disable-next-line
  render() {
    return (
      <Html lang={LANG}>
        <Head>

          {/* Meta */}
          <meta charSet="utf-8" />
          <meta name="theme-color" content={colors.primary} />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            // eslint-disable-next-line max-len
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <title>Open Shiba Foundation</title>

          {/* Fonts */}
          <link
            // eslint-disable-next-line max-len
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;900&family=Source+Code+Pro:wght@200;900&display=swap"
            rel="stylesheet"
          />

          {/* Icons */}
          <link href="/icons/icon-48x48.png" rel="icon" type="image/png" sizes="48x48" />
          <link href="/icons/icon-72x72.png" rel="icon" type="image/png" sizes="72x72" />
          <link href="/icons/icon-96x96.png" rel="icon" type="image/png" sizes="96x96" />
          <link href="/icons/icon-144x144.png" rel="icon" type="image/png" sizes="144x144" />
          <link href="/icons/icon-192x192.png" rel="icon" type="image/png" sizes="192x192" />
          <link href="/icons/icon-256x256.png" rel="icon" type="image/png" sizes="256x256" />
          <link href="/icons/icon-384x384.png" rel="icon" type="image/png" sizes="384x384" />
          <link href="/icons/icon-512x512.png" rel="icon" type="image/png" sizes="512x512" />
          <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
        </Head>
        <body className="isLoading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
