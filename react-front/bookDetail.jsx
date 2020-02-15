import React from "react";

const book = this.props.book;

class bookDetail extends React.Component {
    render(){
        <img src={book.imageUrl}/>,
        <h1>{book.title}</h1>,
        <h2>{book.totalRate}</h2>,
        <h2>{book.author}</h2>,
        <h3>{book.description}</h3>
    }
}