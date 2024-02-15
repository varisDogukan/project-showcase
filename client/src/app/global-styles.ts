"use client";

import { createGlobalStyle } from "styled-components";

export const theme = {
  dark: {
    primaryColor: "#e2e2e2",
    primaryBg: "#1d1d1d",
    secondaryBg: "#2a2a2a",
    secondaryColor: "#c3c3c3",
    tertiaryBg: "#324e4e",
    tertiaryColor: "#c3c3c3",
    errorColor: "#cc1000",
  },
  light: {
    primaryColor: "#1d1d1d",
    primaryBg: "#e2e2e2",
    secondaryBg: "#c3c3c3",
    secondaryColor: "#2a2a2a",
    tertiaryBg: "#93b9b9",
    tertiaryColor: "#2a2a2a",
    errorColor: "#aa0000",
  },
};

const GlobalStyles = createGlobalStyle`
  :root {
  /* FONTS */ 
  --f-sm: 0.8125rem; // 13px
  --f-md: 0.9375rem; // 15px
  --f-lg: 1.5rem; // 24px
  --f-xl: 2.25rem; // 36px

  /* COLORS */ 
  --primary-color: ${(props) => props.theme.primaryColor};
  --primary-bg: ${(props) => props.theme.primaryBg};
  --secondary-bg: ${(props) => props.theme.secondaryBg};  
  --secondary-color: ${(props) => props.theme.secondaryColor};
  --tertiary-bg: ${(props) => props.theme.tertiaryBg};  
  --tertiary-color: ${(props) => props.theme.tertiaryColor};
  --error-color: ${(props) => props.theme.errorColor};

  --transparent: transparent;

  --stroke-color: hsl(0, 0%, 48%);
  
  /* SHADOW */
  --bs-full: 5px 5px 0px rgba(0,0,0, 1);
  --bs-full-hover: 2px 2px 0px rgba(0,0,0, 1);  
  --bs-disabled-full: 5px 5px 0px rgba(0,0,0, 0.5);
  --bs-disabled-full-hover: 2px 2px 0px rgba(0,0,0, 0.5);
    
  --max-width: 1440px;
  --form-max-width: 617px;
  --transition: all .2s linear;
  --max-container: min(90%, var(--max-width));
}

*, *::before, *::after { 
  box-sizing: border-box; 
  margin: 0; 
  padding: 0; 
  font-family: inherit;
  transition: color .2s ease, background .2s ease;  
}

* {
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */ 
}

html { font-size: 100%; } 
html, body, #root { height: 100%; }

body {  
  line-height: 1.5;  
  -webkit-font-smoothing: antialiased; 
  background-color: var(--primary-bg); 
  color: var(--primary-color); 
}

img, picture, video, canvas, svg {  
  display: block;  
  max-width: 100%;  
  object-fit: cover; 
}

ul { list-style: none; }

a { 
  text-decoration: none; 
  color: inherit 
}

input, button, textarea, select { font: inherit; }

button { cursor: pointer; border: none; }

p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }

#root { isolation: isolate; }
`;

export default GlobalStyles;
