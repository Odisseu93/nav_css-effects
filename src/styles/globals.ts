import { createGlobalStyle }  from 'styled-components';

export const GlobalsStyles = createGlobalStyle `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Ubuntu", sans-serif ;
}

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a {
  display: block;
  align-self: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] { -moz-appearance: textfield; }
`;


