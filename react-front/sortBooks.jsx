import React from "react";
import Header from "./globalStyles/Header";
import ReactDOM from "react-dom";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

const Body = styled.div`
    width:100%;
    height:100vh;
    position:absolute;
    
`;

const Bookdiv = styled.a`
    /* float:left; */
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:black;
    width:250px;
    height:400px;
    font-size:1rem;
    img:first-child{
        width:200px;
        height:250px;
    }
    div:nth-child(2){
        margin-top:0.5rem;
    }

`;
const Div_box = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    top:10rem;
    width:100%;
    height:100%;
    @media screan and (max-width: 600px) and (min-width: 300px)
    {
        top:250px;
    }
`;
const Div_flex = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    flex-wrap: wrap;
`;
const H_one = styled.h1`
    margin:1rem;
`;
class sortBooks extends React.Component {
    render() {
        const sortedBy = this.props.sortedBy;
        const books = this.props.books.map((book) => {
            return (
                <Bookdiv href={`/${this.props.routes.bookDetail(book.id)}`}>
                    <img src={`/${book.imageUrl}`} />
                    <div>
                        {book.title}
                    </div>
                    <div>
                        작가 : {book.author}
                    </div>
                    <div>
                         조회수 : {book.viewsFigure}회 
                    </div>
                    <div>
                        분류 : {sortedBy}
                    </div>

                    {/* <div>({book.enrolledBy[0].username}님이 등록)</div>
                    <div>{JSON.stringify(book.createdAt)}</div> */}
                </Bookdiv>
            )
        });
        return (
            <BaseLayout>
                <GlobalStyle />
                {Header(this.props)}
                <Body>
                    <Div_box>
                        <H_one>
                            {sortedBy}
                        </H_one>
                        <Div_flex>
                            {books}
                        </Div_flex>
                    </Div_box>
                </Body>
            </BaseLayout>

        )
    }
}

export default sortBooks;
