import { css } from '@emotion/react';

import { colors } from '../../../global/config/style';

export default css`
  p {
    text-align: justify;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 100;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 6rem;
    line-height: 6rem;
  }

  h2 {
    font-size: 5rem;
    line-height: 5rem;
  }

  h3 {
    font-size: 4rem;
    line-height: 4rem;
  }

  h4 {
    font-size: 3rem;
    line-height: 3rem;
  }

  h5 {
    font-size: 2rem;
    line-height: 2rem;
  }

  h6 {
    font-size: 1rem;
    line-height: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.white};
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    text-rendering: optimizeLegibility;
    letter-spacing: 0.075rem;
    margin: 0 0 0px 0;
    padding: 0;
  }
`;
