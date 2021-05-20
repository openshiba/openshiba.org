// Modules
import Head from 'next/head';

// Context
import { AppContext } from '../../global/context/app.js';

// Style
import 'normalize.css';
import { colors } from '../../global/config/style/index.js';

interface Props {
  Component: any,
  pageProps: unknown,
}

const App = ({ Component, pageProps } : Props): unknown => (
  <AppContext>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        // eslint-disable-next-line max-len
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>Open Shiba Foundation</title>

      <meta name="theme-color" content={colors.primary} />
    </Head>
    <Component {...pageProps} />
  </AppContext>
);

export default App;
