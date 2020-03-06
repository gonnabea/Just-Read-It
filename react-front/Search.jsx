import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";


const Box = styled.div`
    /* font-family: 'Gugi', cursive; */
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-size:1rem;

`;

const Image = styled.img`
    width:10rem;
    height:100%;
`;

const Ul = styled.ul`
    display:flex;
`;

const Li = styled.li`
    /* font-family: 'Nanum Pen Script', cursive; */

`;
class search extends React.Component {
    render() {
        const results = this.props.results
        function CheckSearchResult() {
            if (results[0]) {
                return (
                    <div>
                        <Header />

                        <h1>{results[0].terms[0]} 검색결과 : </h1>
                        <Ul>
                            {resultScreen}
                        </Ul>
                    </div>
                )
            } else {
                return (
                    <>
                        <Header />

                        <h1>검색결과가 없습니다.</h1>
                    </>
                )
            }
        }
        const resultScreen = results.map(books => {
            return (
                <BaseLayout>
                    <GlobalStyle />
                    <Box className="search_list">
                        <li>
                            <a href={`/${this.props.routes.bookDetail(books.id)}`}>
                                <Image src={books.imageUrl} />
                                <span>{books.title}</span>
                                <span>{books.author}</span>
                                <span>{books.description}</span>
                            </a>
                        </li>
                    </Box>

                </BaseLayout>

            )
        })

        return (
            //console.log(resultScreen),
            <CheckSearchResult />

        );
    }
}

export default search;