import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Ubuntu', sans-serif;
  color:#4a4a4a;
  font-size: 62.5%;
}

body {    
  font-weight: 400;
  font-size: 0.5rem;
  line-height:1.7;
  background-color: #928a97;
  background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");
  padding: 4rem 6rem;

  @media screen and (max-width: 800px) {
    paddding: 2.5rem;
  }
}  

a {
  text-decoration: none;
  color:#4a4a4a;
}
`;