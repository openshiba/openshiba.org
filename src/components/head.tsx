// Modules
import PageHead from 'next/head';

// Style
import 'normalize.css';
import { colors } from '../../global/config/style/index.js';

// eslint-disable-next-line
const Head = () => (
  <PageHead>
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

    <link rel="apple-touch-icon" href="/apple-icon.png" />
    <meta name="theme-color" content={colors.primary} />
  </PageHead>
);

export default Head;
