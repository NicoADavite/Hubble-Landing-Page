import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
    }

    html, body {
        background-color: ${({ theme }) => theme.colors.body};
        font-size: 18px;
    }
`;
