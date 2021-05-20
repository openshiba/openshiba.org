import { Global } from '@emotion/react';
import { NextSeo } from 'next-seo';

// Components
import global from '../components/style/global';

interface Props {
  children?: any,
  description?: string,
  title?: string
}

// eslint-disable-next-line
const Layout = ({
  children,
  description = 'Open Shiba Foundation',
  title = 'Open Shiba Foundation',
}:Props) => {
  const defaultDescription = description || 'Open Shiba Foundation';
  const defaultTitle = title || 'Open Shiba Foundation';

  return (
    <main
      style={{
        height: '100%',
        display: 'grid',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <NextSeo
        title={defaultTitle}
        description={defaultDescription}
      />
      <Global styles={global} />
      <>
        {children}
      </>
    </main>
  );
};

export default Layout;
