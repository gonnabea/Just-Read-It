import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

::-webkit-scrollbar { width: 5.2px; }
::-webkit-scrollbar-track { background-color:#5D5D5D; }
::-webkit-scrollbar-thumb { background: #303030; }
::-webkit-scrollbar-thumb:hover { background: #404040; }
::-webkit-scrollbar-thumb:active { background: #808080; }
::-webkit-scrollbar-button { display: none; }
`
export default globalStyle;