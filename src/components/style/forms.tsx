// Third-Party
import { css } from '@emotion/react';

// Config
import { colors } from '../../../global/config/style';

export default css`
  button {
    &:active,
    &:focus {
      border: 0;
      outline: 0;
    }
  }
  input {
    background-color: ${colors.white['200']};
    border: solid 2px ${colors.white['200']};
    padding: 4px 8px;
    margin-bottom: 2px;

    &:focus {
      border-color: ${colors.primary};
      outline: none;
    }
  }
  label {
    margin: 0 0 10px 0;
    padding: 0 0 0 0;
  }
  button {
    background: ${colors.primary};
    border: solid 1px ${colors.primary};
    cursor: pointer;
    padding: 5px 10px;
    transition: ease-in-out opacity 0.5s;
    &:hover {
      opacity: 0.8;
    }
  }
  .btn {
    background: ${colors.primary};
    border: solid 2px ${colors.primary};
    color: ${colors.black};
    cursor: pointer;
    font-weight: bold;
    padding: 20px;
    transition: ease-in-out 0.5s all;

    &.block {
      display: block;
    }

    &.small {
      font-size: 0.8rem;
      font-weight: normal;
      padding: 5px 8px;
    }

    &:active,
    &:hover {
      background: ${colors.white['200']};
      border: solid 2px ${colors.primary};
      color: ${colors.black};
    }
  }
  [contenteditable] {
    outline: 0px solid transparent;
  }
`;
