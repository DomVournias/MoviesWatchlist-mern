import { createGlobalStyle } from "styled-components";

// Breakpoints.

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const GlobalStyles = createGlobalStyle`

  html {
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff; 
  }

  body {
    font-family: Roboto, Arial;
    text-size-adjust: none;
    margin: 0;
    padding: 0;
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




`;
