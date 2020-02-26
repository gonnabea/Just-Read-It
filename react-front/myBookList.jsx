import React from "react";

class MyBookList extends React.Component{
    render(){
        console.log(this.props.currentUser)
        const routes = this.props.routes
        return(
            <>
            <img src={this.props.currentUser.profilePhoto}/>
        <h2>{this.props.currentUser.username}님의 즐겨찾기 목록:</h2>
            
        
        
        {this.props.currentUser.favBooks.map(book => {
            return(
            <>
            <a href={`/${this.props.routes.bookDetail(book.id)}`}>
            <img src={`/${book.imageUrl}`} alt=""/>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <h4>{book.description}</h4>
            <form action={routes.deleteFavBook(book.id)} method="post">
                <input type="submit" value="즐겨찾기 삭제"/>
            </form>
            </a>
            </>
            )
        })}
        </>
        )
    }

}

export default MyBookList