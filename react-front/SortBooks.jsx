import React from "react";
import Header from "./globalStyles/Header";
import ReactDOM from "react-dom";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

const Body = styled.div`
    position:relative;
    top:0; 
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    width:100%;
    height:100vh;

    @media screen and (max-width: 700px)
    { 
        top:0; 
    }
`;

const Bookdiv = styled.div`
    float:left;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin: 0 0.5rem 0 0;
`;

class sortBooks extends React.Component {
    render() {
        const sortedBy = this.props.sortedBy;
        const books = this.props.books.map((book) => {
            return (
                <Bookdiv>
                    <a href={`/${this.props.routes.bookDetail(book.id)}`}>
                        <img src={`/${book.imageUrl}`} />
                    </a>
                    <div>
                        {book.title}
                    </div>
                    <div>
                        작가 : {book.author}
                    </div>
                    <div> 조회수 {book.viewsFigure}회 </div>
                    <div>분류 : {book.genre}</div>

                    <div>({book.enrolledBy[0].username}님이 등록)</div>
                    <div>{JSON.stringify(book.createdAt)}</div>
                </Bookdiv>
            )
        });
        return (
            <BaseLayout>
                <GlobalStyle />
                {Header(this.props)}
                <Body>
                    <h1 style={{marginBottom:"1rem"}}>you're in {sortedBy}</h1>
                    <h2>{books}</h2>
                </Body>
            </BaseLayout>

        )
    }
}

export default sortBooks;