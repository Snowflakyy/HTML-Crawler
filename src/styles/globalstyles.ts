import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  

  html,
  body {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  @supports (font-variation-settings: normal) {
    :root {
      font-family: 'Play Bold', sans-serif;
    }
  }
:root { font-family: "Inter", sans-serif; }

  * {
    box-sizing: border-box;
    border-color: var(--border);
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, span, p {
    margin: 0;
    padding: 0;
font-family: 'Inter', sans-serif;
  }

  body {
    color: hsl(var(--foreground));
    font-feature-settings: "rlig" 1, "calt" 1;
  }
`;

// export const GlobalStyles = createGlobalStyle`
//     html,
//     body {
//         padding: 0;
//         margin: 0;
//         scroll-behavior: smooth;

//     }

//     a {
//         display: inline-block;
//         color: inherit;
//         text-decoration: none;
//     }

//     * {
//         box-sizing: border-box;

//     }

//     h1, h2, h3, h4, h5, span, p {
//         margin: 0;
//         padding: 0;
//         font-family: 'InterVariable', sans-serif;
//     }

// :root { font-family: 'Inter', sans-serif; }
// @supports (font-variation-settings: normal) {
//   :root { font-family: 'InterVariable', sans-serif; }
// }

// `;
