import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`html {
    margin: 0;
    padding: 0; /* Reset default margins and padding on html */
    overflow-x: hidden; /* Ensure no horizontal overflow occurs */
}
    
html {
  scroll-behavior: smooth;
}

body {
    color: #a9a9a9;
    font-family: "Nunito", sans-serif;
    margin: 0;
    height: 100vh;
    width: 100%; /* Changed from 100vw to avoid including scrollbar width */
    background-color: black;
    position: relative; /* Ensure pseudo-elements are positioned relative to the body */
    
}

.container{
  height: 100vh;
    width: 100vw;
}

a {
    color: #cddc39;
    text-decoration: none;
}
a:active {
    color: #ff5722;
}
img{
    height: 10vh;
    width: 10vw;
}


body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   
    z-index: -1; /* Place the background behind all content */
    animation: animateBg 5s linear infinite;
    filter: hue-rotate(0deg);
}

.logo{
  height: 25vh;
    width: 25vw;
}

@keyframes animateBg {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rotate(360deg);
    }
}`;

export default GlobalStyles;
