import { css } from '@emotion/react';

// Config
import { colors } from '../../../global/config/style';

export default css`
  .block {
    display: block;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .primary {
    color: ${colors.primary['500']};
  }

  // spacing
  .m-0 { margin: 0 }
  .p-0 { padding: 0 }
`;