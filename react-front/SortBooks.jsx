import React from "react";
import Header from "./globalStyles/Header";
import ReactDOM from "react-dom";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

class sortBooks extends React.Component{
    render(){
        const sortedBy = this.props.sortedBy;
        const books = this.props.books.map((book)=>{
            return(
                <frame>
            <img src={`/${book.imageUrl}`} />
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
</frame>
            )
            });
        return (
            <BaseLayout>
            <GlobalStyle />
            {Header(this.props)}
            <h1>you're in {sortedBy}</h1>
            <h2>{books}</h2>
            </BaseLayout>

        )
    }
}

export default sortBooks;