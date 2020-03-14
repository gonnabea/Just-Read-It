import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";


const Box = styled.div`
    /* font-family: 'Gugi', cursive; */
    width:100%;
    height:100vh;
    display:flex; 
    justify-content:center;
    text-align:center;
    font-size:1rem;
    position:absolute;

`;

const Grid_box = styled.div`
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns: repeat(auto-fill,auto,1fr);
    text-align:center;
    grid-gap: 10px;
   
    @media screen and (max-width: 600px)
    {
        grid-template-columns: repeat(auto-fill,3,1fr);
        
    }
     
`;
const Div = styled.div`
    display:grid;
`;

const Image = styled.img`
    width:20vh;
    height:100%;
    text-align:center;
    @media screen and (max-width: 1300px)
    { 
        text-align:center;
        width:10vh;
    }
    @media screen and (max-width: 600px)
    {
        text-align:center;
        width:6.5vh;
        
    }
`;

const A = styled.a`
    margin:0.4vh;
    display:flex;
    width:80%;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    align-items:center;
    @media screen and (max-width: 600px)
    {
        margin:1vh;
    }
`;

const H_one = styled.h1`
    display:grid;
    margin-top:10vh;
    margin-bottom:5vh;
    grid-area: span 1 /span 5;
    text-align:center;

`;
const Span = styled.span`
    margin-top:0.4vh;
    text-overflow:ellipsis;
    font-size:2vh;
    color:white;
    @media screen and (max-width: 1300px)
    { 
        font-size:1.5vh;
        
    }
    @media screen and (max-width: 600px)
    {
        font-size:1vh;
        
    }

`;

const Background_img = styled.div`
    position:absolute;
    z-index:-1;
    top:0;
    width:100%;
    height:100%;
    background-image:url("https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg");
    background-repeat:repeat;
    background-position:center center;
    background-size:100% auto;
    @media screen and (min-height: 100vh)
    {
        height:150vh;
    }
`;

class search extends React.Component {
    render() {
        const results = this.props.results;
        const searchingBy = this.props.searchingBy;
        console.log(results)
        function CheckSearchResult() {
            if (results[0]) {
                return (

                    <>

                        <H_one  >
                            {searchingBy} 검색결과 :
                        </H_one>
                        {resultScreen}

                    </>

                )
            } else {
                return (
                    <>

                        <H_one >
                            검색결과가 없습니다.
                        </H_one>
                    </>
                )
            }
        }
        const resultScreen = results.map(books => {
            return (
                <div>
                    <A href={`/${this.props.routes.bookDetail(books.id)}`}>
                        <Image src={books.imageUrl} />
                        <Span>{books.title}</Span>
                        <Span>{books.author}</Span>
                        {/* <Span>{books.description}</Span> */}
                    </A>
                </div>


            )
        })

        return (
            //console.log(resultScreen),
            <BaseLayout>
                <GlobalStyle />
                    {Header(this.props)}

                <Grid_box>

                    <CheckSearchResult />
                </Grid_box>
            <Background_img>
                </Background_img>
            </BaseLayout>

        );
    }
}

export default search;