import { css } from '@emotion/react';

const IndexPage = () : unknown => (
  <nav
    css={css`
      li {
        display: inline-block;
        font-size: 0.8rem;
        font-weight: 900;
        list-style: none;
        margin: 0;
        padding: 10px;
      }
    `}
  >
    <ul
      style={{
        listStyle: 'none',
        margin: '0',
        padding: '0',
      }}
    >
      <li>
        <a href="https://github.com/openshiba" target="_blank" rel="noreferrer">
          Github
        </a>
      </li>
      <li>|</li>
      <li>
        <a
          href="https://twitter.com/OpenShiba"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </li>
      <li>|</li>
      <li>
        <a href="https://www.shibatoken.com/" target="_blank" rel="noreferrer">
          Official Shiba Site
        </a>
      </li>
    </ul>
  </nav>
);

export default IndexPage;
