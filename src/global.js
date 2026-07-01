import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root {
    --radius-sm: 10px;
    --radius-md: 14px;
    --radius-lg: 18px;
    --shadow-sm: 0 6px 18px rgba(2, 6, 23, 0.18);
    --shadow-md: 0 14px 36px rgba(2, 6, 23, 0.28);
    --border-subtle: ${({ theme }) =>
      theme.borderSubtle || "rgba(148, 163, 184, 0.25)"};
    --surface: ${({ theme }) => theme.surface || "rgba(255, 255, 255, 0.72)"};
    --surface-strong: ${({ theme }) =>
      theme.surfaceStrong || "rgba(255, 255, 255, 0.88)"};
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.45;
    transition: background-color 0.25s linear, color 0.25s linear;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  a {
    color: inherit;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid ${({ theme }) => theme.imageHighlight};
    outline-offset: 2px;
    border-radius: 8px;
  }
`;
