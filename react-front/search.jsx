import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";
import MetaTags from 'react-meta-tags';

const Grid_box = styled.div`
    width:100%;
    height:100vh;
    display:grid;
    text-align:center;
    grid-gap: 10px;
    grid-template-columns: repeat(5,1fr);
    position:relative;
    top:10rem;
    background-image:url("https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg");
    background-repeat:repeat;
    background-position:center center;
    background-size: 100% 100%;
    @media screan and (max-width: 600px) and (min-width: 300px)
    {
        top:14rem;
        grid-template-columns: repeat(1,1fr);
    }
    @media screen and (max-device-width: 450px)
    {
        top:15rem;
        grid-template-columns: repeat(3,1fr);
    }
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
    /* display:grid; */
    margin-bottom:5vh;
    width:100%;
    /* grid-area: span 1 /span 6;  */
    position:absolute;
    text-align:center;
    top:-50px;
    box-shadow: 0px 3.5px 5px 3.5px #F7BC43;
    @media screen and (max-width: 400px)
    {
        font-size:1rem;
    }
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
    position:relative;
    z-index:-1;
    top:0;
    width:100%;
    height:100%;
    background-image:url("https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg");
    background-repeat:repeat;
    background-position:center center;
    background-size: 100% 100%;
    
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
                        <H_one>
                            "{searchingBy}" 검색 결과
                        </H_one>
                            {resultScreen}
                    </>
                )
            } else {
                return (
                    <>
                        <H_one color="red">
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
            <BaseLayout>
                <GlobalStyle />
                    {Header(this.props)}
                    <Grid_box>
                            <CheckSearchResult />
                    </Grid_box>
            </BaseLayout>
        );
    }
}

export default search;
