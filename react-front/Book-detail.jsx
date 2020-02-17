import React from "react";


class bookDetail extends React.Component {
    render(){
        const book = this.props.book
        return(
        <React.Fragment>
        <img src={`/${book.imageUrl}`}/>
        <h1>{book.title}</h1>
        <h2>{book.totalRate}</h2>
        <h2>{book.author}</h2>
        <h3>{book.description}</h3>
        </React.Fragment>
        )
    }
}

export default bookDetail