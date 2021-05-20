// Modules
import { useEffect } from 'react';
import * as Fathom from 'fathom-client';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Context
import { AppContext } from '../../global/context/app.js';

// Style
import 'normalize.css';

interface Props {
  Component: any,
  pageProps: unknown,
}

const App = ({ Component, pageProps }: Props): unknown => {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('NSSQMDBT', {
      includedDomains: ['openshiba.org'],
    });

    function onRouteChangeComplete() : void {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
};

export default App;
