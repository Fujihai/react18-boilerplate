import { Global, css } from '@emotion/react';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

// override basic style
const rebase = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  button,
  a {
    color: currentColor;
    text-decoration: none;
    border: none;
    cursor: pointer;

    &:not(:disabled):hover {
      opacity: 0.8;
    }
    &:not(:disabled):active {
      opacity: 0.4;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  }
`;

// global layout style
const layout = css`
  html,
  body,
  #root {
    height: 100%;
  }
`;

// global theme style
const theme = css`
  html,
  body {
    font-size: 16px;
    font-family: PingFangSC, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    color: black;
    background-color: white;
  }

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    background-clip: padding-box;
    border: 5px solid transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export function GlobalStyles() {
  return <Global styles={[rebase, layout, theme]} />;
}
