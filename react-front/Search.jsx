import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";


const Box = styled.div`
    /* font-family: 'Gugi', cursive; */
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    font-size:1rem;
    position:absolute;

`;

const Grid_box = styled.div`
    display:grid;
    grid-template-columns: repeat(5,1fr);
    text-align:center;
     @media screen and (max-width: 1300px)
    { 
        grid-template-columns: repeat(3,1fr);
    }
     
`;

const Image = styled.img`
    width:15rem;
    height:100%;
    @media screen and (max-width: 1300px)
    { 
        text-align:center;
        position:relative;
        width:10rem;

    }
`;

const A = styled.a`
    margin:0.4rem;
    display:flex;
    width:80%;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    align-items:center;
    margin:0.3rem;
`;

const H_one = styled.h1`
    display:grid;
    margin-top:8rem;
    grid-area: span 1 /span 5;
    text-align:center;

`;
const Span = styled.span`
    margin-top:0.4rem;
    text-overflow:ellipsis;
`;
class search extends React.Component {
    render() {
        const results = this.props.results
        function CheckSearchResult() {
            if (results[0]) {
                return (

                    <>
                        <Header />

                        {/* <Box className="search_list"> */}
                        <H_one  >
                            {results[0].terms[0]} 검색결과 :
                            </H_one>
                        {resultScreen}

                        {/* </Box> */}
                    </>

                )
            } else {
                return (
                    <>
                        <Header />

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
                <Grid_box>

                    <CheckSearchResult />
                </Grid_box>

            </BaseLayout>

        );
    }
}

export default search;