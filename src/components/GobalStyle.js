import { createGlobalStyle } from "styled-components";
import animateBg from "../img/BGimg.png";
import BgSmall from "../img/BGsmall-img.png";
import BgXSmall from "../img/BG-xs-img.png";

const GlobalStyles = createGlobalStyle`

body {
    color: #a9a9a9;
    font-family: "Nunito", sans-serif;
    width: 100%;
    overflow-x: hidden;
    margin: 0;

    position: relative; /* Ensure that pseudo-elements are positioned relative to the body */
}

a{
    color: #cddc39;
    text-decoration: none;
}
a:active {
    color: #ff5722;
  }
  
body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${animateBg});
    background-repeat: repeat;
    
    z-index: -1; /* Place the background behind all content */
    animation: animateBg 5s linear infinite;
    filter: hue-rotate(0deg);
}

@keyframes animateBg {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rotate(360deg);
    }
}

@media (max-width: 1300px) {
    body::before {
        background: url(${BgSmall});
        background-repeat: repeat;

    }
}

@media (max-width: 600px) {
    body::before {
        background: url(${BgXSmall});
        background-repeat: repeat;

    }
}
`;

export default GlobalStyles;
