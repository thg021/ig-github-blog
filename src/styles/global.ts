import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
 * {
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }


    body{
        background: ${({ theme: { colors } }) => colors['base-background']};
        color: ${({ theme: { colors } }) => colors['base-title']};
        -webkit-font-smoothing: antialiased;
    }


    body, input, textarea, button {
        font: 400 ${({ theme }) =>
          theme.textSizes['text-m']} 'Nunito', sans-serif;
      line-height: 160%;
    }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`
