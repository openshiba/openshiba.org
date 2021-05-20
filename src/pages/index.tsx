// Thirs-Party
import Image from 'next/image';
import { css } from '@emotion/react';

// Components
import Navigation from '../components/navigation';

// Layout
import Layout from '../layouts/main';

const Home = () => (
  <Layout>
    <div css={css`
      max-width: 1000px;
      padding: 1rem 2rem;
    `}
    >
      <Navigation />
      <section
        css={css`
          margin-top: 40px;
        `}
      >
        <Image
          src="/shiba-logo.png"
          alt="Shiba Logo"
          height={140}
          width={140}
        />
        <h1
          css={css`
            font-family: 'Source Code Pro', monospace;
            font-size: 2.2rem;
            font-weight: 200;
          `}
        >
          Open Shiba Foundation
        </h1>
        <p>
          Welcome to the Open Shiba Foundation! Our aim is to enable the Shiba
          community to develop and support open source projects centered around
          the
          {' '}
          <a
            href="https://www.shibatoken.com/"
            target="_blank"
            rel="noreferrer"
          >
            Shiba Token
          </a>
          .
        </p>
        <p>
          We are not officially sponsored or supported by the core Shiba Team.
          However as is meant to be a truly decentralized system powered by the
          community, we thought it made sense to create a support system for
          people who want to support, promote or build with Shiba.
        </p>
        <p>
          Look for more info in this space soon. In the meantime, check out this
          {' '}
          <a
            href="https://github.com/openshiba/projects"
            target="_blank"
            rel="noreferrer"
          >
            Github page
          </a>
          {' '}
          for more info on how to get involed.
        </p>
      </section>
    </div>
  </Layout>
);

export default Home;
