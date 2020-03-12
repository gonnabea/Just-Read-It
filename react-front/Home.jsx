import React from "react";
import Header from "./globalStyles/Header";
import ReactDOM from "react-dom";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

const Div = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Recom_div = styled.div`
    width:100%;
    height:45vh;
    display:grid;
    overflow: auto;
    grid-area: span 1/ span 5;
    background:   rgba(8, 177, 199, 0.767);

    /* display:fixed;
    position:absolute;
    right:0;
    top:0; */
    /* margin-right:1rem;
    margin-top:10.5vh; */
    
    @media screen and (max-width: 1300px)
    { 
        grid-area: span 1/ span 3;
    }
`;
const Recom_a = styled.a`
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
`;

let i = 1;

const Ul = styled.ul`
    display:block;
    margin-top:-5rem;
    
    /* &>li:first-child>a>span:nth-child(2){
        color:red;
    }
    &>li:nth-child(2)>a>span:nth-child(2){
        color:red;
    } */
    &>li{
        margin-top:6rem;
        display:flex;
        flex-direction:column;
    }
   
    &>li:nth-child(${i})>a>span:nth-child(2){
        color:blue;
    }
    &>li:nth-child(${i})>a>span:nth-child(3){
        color:blue;
        ${i++}
    }
    
    &>li:nth-child(${i})>a>span:nth-child(2){
        color:blue;
        ${i++}
    }
   

    &>li:nth-child(${i})>a>span:nth-child(2){
        color:blue;
        ${i=1}
    }



`;

const Li = styled.li`
    display:flex;
    text-align:center;
    align-items:center;
    margin-top:3.5rem;
    /* flex-direction:column; */
    /* text-overflow: auto; */
    margin-right:1rem;
    
`;

const Button = styled.button`
    margin:0.6rem;
`;

const Image = styled.img`
    width:${props => props.width || "15rem"};
    height:100%;
    margin-top:1rem;
    margin-left:1rem;

    @media screen and (max-width: 1300px)
    { 
        position:relative;
        width:10rem;
    }
/* 
    &:hover{
     animation: Hover 0.2s 250ms linear forwards;
    transform-style: preserve-3d; 


        @keyframes Hover {
            0%{
                box-shadow: 0;
                transform: translateY(0vh);
            }
        
            100%{
                box-shadow: 10px 10px 20px black;
                transform: translateY(-4vh);
                border-radius:5px;
            }
        } 

    box-shadow: 10px 10px 20px black;
        transform: translateY(-5vw);
    } */

`;
const Span = styled.span`
    display:block;
    text-overflow: hidden;    
    overflow: hidden;
    width:100px;
    height:100px;
`;

const A = styled.a`
    margin-right:1rem; 
    display:flex;
    flex-direction:column;
    text-overflow: hidden;
`;
const Reflex = styled.div`
    display:flex;
    flex-direction:column-reverse;
`;

const Grid_box = styled.div`
    display:grid;
    grid-template-columns: repeat(5,1fr);
    text-align:center;

     
    @media screen and (max-width: 1300px)
    { 
        text-align:center;
        grid-template-columns: repeat(3,1fr);
    }

`;

const Text_box = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    overflow:hidden;
`;

const Spantwo = styled.span`
width:100%;
 text-overflow: hidden;    
    overflow: hidden;
`;

const H_one = styled.h1`
    font-size: 1rem;
    text-align:center;
     @media screen and (max-width: 1300px)
    { 
        font-size: 0.7rem;
    }
`;

const H_two = styled.h2`
        font-size: 0.7rem;

 @media screen and (max-width: 1300px)
    {
        font-size: 0.5rem;

    }
`;

const Header_line = styled.div`
`;

const Book = styled.a`
transform-style: preserve-3d;
animation-fill-mode: forwards;

:hover{


&>img:first-child{
    animation: Hover 0.2s 250ms linear forwards;
    transform-style: preserve-3d;
        @keyframes Hover {
            0%{
                box-shadow: 0;
                transform: translateY(0vh);
            }
        
            100%{
                box-shadow: 10px 10px 20px black;
                transform: translateY(-4vh);
                border-radius:5px;
            }
        } 

    /*box-shadow: 10px 10px 20px black;
        transform: translateY(-5vw);*/
    }
}

`

function Home(props) {
 

    
    function recommendList() {
        if (props.recomendBooks) {
            return (
                <h4 style={{ marginTop: "6rem" }}>
                    {props.user.username}님만을 위한 추천 리스트 :
                </h4>
            )
        }
    }
    
    function recomSys() {
        // console.log(props.recomendBooks)
        if (props.recomendBooks) {
            // console.log(props.recomendBooks.length)
            return (
                props.recomendBooks.map(argument =>
                    {
                        if (argument === null) 
                        {
                            return "";
                        }
                    else 
                    {
                        return (
                            <Li classNanme="reco_list">
                                <Recom_a href={`/${props.routes.bookDetail(argument.id)}`}>
                                    <Image width="10rem" src={argument.imageUrl} />
                                    <Span>{argument.title}</Span>
                                    <Span>{argument.author}</Span>
                                    <Span>{argument.description}</Span>
                                </Recom_a>
                                
                            </Li>
                            )
                    }
                })
            )
        } else {
            return "";
        }
    }

    function example(){
        console.log("xxx")
       
    }

    const handleClick = () =>{
        console.log("sdfasfgdgbxgdzgsdfbsfvbx")
       }
       
    const bookList =
        props.books.map(book => {
            return (
                <Header_line>
                    <div>
                        <Book href={props.routes.bookDetail(book.id)}>
                            <Image src={book.imageUrl} alt={book.imageUrl} />
                            <Text_box className="text_box" >
                                <H_one>{book.title}</H_one>
                                <H_two>작가 : {book.author}</H_two>
                                <Spantwo>({book.enrolledBy[0].username}님이 등록)</Spantwo>
                                <Spantwo>{JSON.stringify(book.createdAt)}</Spantwo>
                                {/* <Spantwo>{book.description}</Spantwo> */}
                            </Text_box>
                        </Book>
                    </div>
                </Header_line>
            )
        })

    return (
        <BaseLayout>
            <GlobalStyle />
            {Header(props)}
            <Grid_box>

                <Recom_div>
                    {recommendList()}
                    <Ul>
                        {recomSys()}
                        <Button click="PrevPage">
                            Prev
                            </Button>
                        <Button onClick="nextPage">
                            Next

                        </Button>
                    </Ul>
                </Recom_div>
                <Button id="btn" >
                    this button
                </Button>
                {bookList}

            </Grid_box>
            <script src="/vanilla/home.js"></script>
        </BaseLayout>
    );
}

export default Home;