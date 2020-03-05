import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Gugi|Nanum+Brush+Script&display=swap&subset=korean');
/* 
font-family: 'Nanum Brush Script', cursive;
    font-family: 'Gugi', cursive; */
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
`
export default globalStyle;