import React from "react";

class search extends React.Component{
    render(){
    return (<h1>{this.props}검색결과 : </h1>,
        this.props.forEach(books => {
            <img src={books.imageUrl}>
            </img>,
            <h1>{books.title}</h1>,
            <h3>{books.author}</h3>
        })
        )
    }
}