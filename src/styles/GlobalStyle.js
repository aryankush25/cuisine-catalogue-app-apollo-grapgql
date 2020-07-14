import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
		font-family: Muli-Regular;
  }
  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
