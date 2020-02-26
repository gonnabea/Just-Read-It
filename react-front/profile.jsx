import React from "react";

class profile extends React.Component{
    render(){
        
        return(
            <>
            <img src={this.props.currentUser.profilePhoto}/>
        <h2>{this.props.currentUser.username}님이 등록한 책 리스트:</h2>
        <a href={this.props.routes.editUser(this.props.user.id)}>프로필 수정</a>
        {this.props.currentUser.uploadedBooks.map(book => {
            return(
            <a href={`/${this.props.routes.bookDetail(book.id)}`}>
            <img src={`/${book.imageUrl}`} alt=""/>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <h4>{book.description}</h4>
            </a>
            )
        })}
        </>
        )
    }

}

export default profile