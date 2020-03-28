import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

::-webkit-scrollbar { width: 1.5vh; }
::-webkit-scrollbar-track { 
    background-color:#5D5D5D;
    
 }
 
::-webkit-scrollbar-thumb { 
    background: yellowgreen;
    border-radius:10px; }
::-webkit-scrollbar-thumb:hover { background: #404040; }
::-webkit-scrollbar-thumb:active { background: #808080; }
::-webkit-scrollbar-button { display: none; }

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid green;
  -webkit-text-fill-color: green;
  -webkit-box-shadow: 0 0 0px 1000px #000 inset;
  transition: background-color 5000s ease-in-out 0s;
}

`;


export default globalStyle;