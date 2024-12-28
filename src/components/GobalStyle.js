import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
}

*, *::before, *::after {
    box-sizing: inherit;
}

.container-homePage.appear {
  opacity: 1;
  display: inline;
}



.navContainer {
  width: 100%;
  height: 4.2rem;
  position: sticky;
  top: 0px;
  left: 0px;
  padding: 1rem;
  z-index: 1000;
  display: flex;
  align-content: center;
  background-color: #333;
  display: inline-flex;
  justify-content: end;
  align-items: end;
  align-self: flex-end;
}

.navLink {
  max-width: 100px;
  font-size: 1.5em;
  position: relative;
  padding: 1rem;
}

.logo {
  width: 140px;
  height: auto;
  position: absolute;
  left: 1em;
  top: 1em;
}

.sidebarToggle,
.sideBar {
  display: none;
  font-size: 3em;
  position: inherit;
  top: 0px;
  color: #fff;
  background: none;
  border: none;
}

body {
    margin: 0px;
    font-family: "Nunito", sans-serif;
    background-color: black;
    color: #ececec;
    overflow: hidden; /* Prevent body from scrolling, let sections handle it */
    min-height: 100vh; /* Body should take up at least 100vh */
    display: flex;
    flex-direction: column;
    text-shadow: 0px 0px 02px rgba(0, 0, 0, 0.9);
    box-sizing: border-box
}

a {
    color: #cddc39;
    text-decoration: none;
}

a:active {
    color: #ff5722;
}

h2 {
  font-size: 2.5rem;
    color: #ff5722;
}

img {
    height: 10vh;
    width: 10vw;
}

.container-homePage.appear {
    opacity: 1;
    display: inline;
    transition: opacity 1s ease;
}


.container-homePage {
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0px;
    display: none;
    transition: opacity 0.5s ease-in-out;
}

section {
    height: 100vh; /* Each section takes full viewport height */
    width: 100vw;  /* Full width of the viewport */
    position: relative;
    overflow: hidden; /* Prevent internal scrolling */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 5s ease-in-out, transform 5s ease-in-out;
}

.section-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; 
}

.section-wrapper .outer {
    width: 100%;
    height: 100%;
}

.section-wrapper .inner {
    width: 100%;
    height: 100%;
}


.Text {
    margin: 0px;
    text-align: justify;
    width: 95%;
}

/* Section visibility and scroll management */
section.inactive {
    opacity: 0; /* Hide sections that are not currently active */
    pointer-events: none; /* Prevent interaction with inactive sections */
    transform: translateY(50px); /* Optional: Adds a little slide-up effect when hiding */
    z-index: -1; /* Sends inactive sections to the back */
}

section.active {
    opacity: 1;
    pointer-events: auto; /* Enable interaction with active section */
    transform: translateY(0); /* Restore position when active */
    z-index: 1; /* Brings active section to the front */
}

.section-wrapper {
  display: none;
}

.section-wrapper.visible {
  display: block;
}

@keyframes animateBg {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rotate(360deg);
    }
}






/* Blurred background */

.bg-contact{
  background-image: url("https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  }

.bg-services{
background-image: url("https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
};

.bg-portfolio{
 background-image: url("https://images.unsplash.com/photo-1700116035176-99d81e11c60b?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
 animation: animateBg 15s infinite;
 }

.bg-about{
background-image: url("https://images.unsplash.com/photo-1691958791864-a825b292a4f5?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
 animation: animateBg 18s infinite;
}

.bg-techstack{
  background-image: url("https://images.unsplash.com/photo-1698571401982-855eac4f6887?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
 }

@keyframes animateBg {
  0% {
      filter: hue-rotate(0deg);
  }
  100% {
      filter: hue-rotate(360deg);
  }
}

.background-blur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  filter: blur(2.5px); /* Adjust blur intensity */
  z-index: -1;
}

.wrapper-inner{
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.58) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.47) 0px 18px 36px -18px inset;
  width: 90%;
height: 80%;

}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  height: 100vh;
  overflow: hidden;
  color: white;
  font-size: 1.2em;
  font-weight: bold;

}




@media (max-width: 750px) {

  .sidebarToggle {
    font-size: 3em;
    display: block;
    position: inherit;
    top: 0px;
    color: #fff;
    background: none;
    border: none;
  }

  .navContainer.open .navLinks {
    display: block;
    position: fixed;
    top: 4em;
    right: 0;
    background-color: rgba(88, 88, 88, 0.75);
    width: 100%;
    text-align: left;
      font-size: .8rem;
  }


  .navLinks {
    display: none;
  }

  .navLink {
    display: block;
    margin: 1em 1em;
    font-size: 3em;
  }
} 

  @media (max-height: 376px) {

 

     .navContainer.open .navLinks {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 0rem 0rem;
      max-width: 1300px;
      margin: 0px;}
    
`;

export default GlobalStyles;
