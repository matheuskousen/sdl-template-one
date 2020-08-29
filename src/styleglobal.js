import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box
}
/* color: #101225; #505641; */
ul,
ul[class],
ol[class] {
    padding: 0
}


.sondline{
    font-family: 'Marcellus', serif;
}
body,
h1,
h2,
h3,
h4,
p,
ul,
ul[class],
ol[class],
figure,
blockquote,
dl,
dd {
    margin: 0
}

html {
    scroll-behavior: smooth
}

body {
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    line-height: calc(22px * 1.5);
    overflow:initial;
    background:#212121;
    color:#F5F5F5;
    line-height: 1.6;
    font-family:   'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
h1,h2,h3,h4{
    font-family: 'Marcellus', serif;
}
h1 {
    font-size: 61px;
    line-height: calc(61px * 1.5);
    font-weight:300;
    
    @media (max-width: 72rem) {
            
            font-size: 44px;
    line-height: calc(44px * 1.5);
    text-align:center;

          }
}

h2 {
    font-size: 48px;
    line-height: calc(48px * 1.5);
  text-align:center;
  font-weight:300;
  @media (max-width: 72rem) {
            
            font-size: 35px;
    line-height: calc(28px * 1.5);
    text-align:center;
          }
}

h3 {
    font-size: 34px;
    line-height: calc(34px * 1.5);
    font-weight:300;
    
    @media (max-width: 72rem) {
            
            font-size: 22px;
    line-height: calc(22px * 1.5);
    text-align:center;
          }
}

p,
a {
    font-style: normal;
    font-size: 18px;
    line-height: calc(18px* 2);
    color:currentColor;
    @media (max-width: 72rem) {
     
     text-align:center;
     font-weight:300;
           }
}

ul,
ul[class],
ol[class] {
    list-style: none
}

a {
    text-decoration: none;
}

a:focus,
a:active {
    text-decoration: none;
}


a:not([class]) {
    text-decoration-skip-ink: auto
}



img,
picture {
    max-width: 100%;
    display: block
}

article>*+* {
    margin-top: 0em
}

input,
button,
textarea,
select {
    font: inherit
}

img:not([alt]) {
    filter: blur(10px)
}


`;
