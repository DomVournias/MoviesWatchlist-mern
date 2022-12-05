import styled, { createGlobalStyle } from "styled-components";
import { device } from "./Breakpoints";

export const GlobalStyles = createGlobalStyle`

  html {
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff; 
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, Arial;
    text-size-adjust: none;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  a:hover {
      opacity: .9;
      cursor: pointer;
    }

  input, a {
    all: unset;
  }

  input {
  color-scheme: dark;
  
  
}

  ul, li, button, h1, h2, h3, h4, h5, h6, p {
    all: unset;
    
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    color: inherit;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

* {
  box-sizing: border-box;
}

*:focus {
  outline: none !important;
}

svg {
  box-sizing: content-box;
}

`;

export const OnlyMobile = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    padding: 0em 1em;
  }
`;
