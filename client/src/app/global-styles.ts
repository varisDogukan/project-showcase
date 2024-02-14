"use client";

import { createGlobalStyle } from "styled-components";

export const theme = {
  dark: {
    primaryColor: "#ffffff",
    primaryBg: "#2d2d2d",
    secondaryBg: "#3A3A3A",
  },
  light: {
    primaryColor: "#2d2d2d",
    primaryBg: "#ffffff",
    secondaryBg: "",
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

html { font-size: 100%; } 
html, body, #root { height: 100%; }

body {  
  line-height: 1.5;  
  -webkit-font-smoothing: antialiased; 
  background-color: var(--primary-bg); 
  color: var(--primary-color);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1em;
  }
 
  &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 10px;
  }  
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
