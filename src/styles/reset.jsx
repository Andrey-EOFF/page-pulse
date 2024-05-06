import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }
`;

export default Reset;
