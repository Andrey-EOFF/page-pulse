import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${Colors.BgColorBody};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body.disable-scroll {
    overflow: hidden;
  }
`;

export const Container = styled.div`
   padding: 0px 40px 0px 36px;
`
