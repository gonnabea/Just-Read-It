import React from "react";

class bookDetail extends React.Component {
    
    render(){
        const book = this.props.book
        return(
        <React.Fragment>
        <img src={`/${book.imageUrl}`}/>
        <h1>{book.title}</h1>
        <h3>{JSON.stringify(book.createdAt)}</h3>
        <h2>{book.totalRate}</h2>
        <h2>{book.author}</h2>
        <h3>{book.description}</h3>
        <h3>{this.props.totalRate}점</h3>
        <form action={this.props.routes.editBook(book.id)} method="post">
        <input type="text" name="title" placeholder="수정할 이름" value={book.title}/>
        <input type="textarea" name="description" placeholder="상세내용" value={book.description}/>
        <input type="text" name="author" placeholder="작가 이름" value={book.author}/>
        <input type="submit" value="수정하기"/>
        </form>
        <form action={this.props.routes.deleteBook(book.id)} method="post">
        <input type="submit" value="책 삭제"/>
        </form>
        <form action={this.props.routes.postReview(book.id)} method="post">
                <input type="text" name="reviewContent" placeholder="책에 대한 평가를 남겨주세요!"/>
                <input type="number" name="rate" placeholder="평점을 남겨주세요" min={0} max={10} value={5} step={.1}/>
                <input type="submit" value="등록"/>
        </form>
        {/*each item in book.review
            img(src=item.creatorPhoto width="50vh")
            h3 #{item.creator}
            h3 #{item.content}
            h3 #{item.rate}점
        h4 #{item.createdAt}*/}
        {book.review.map( (item) => {
                return(
                    <>
                <img src={item.creatorPhoto} width="50vh"/>
                <h3>{item.creator}</h3>
                <h3>{item.content}</h3>
                <h3>{item.rate}</h3>
                <h3>{JSON.stringify(item.createdAt)}</h3>
                </>
                )
        } )}
        </React.Fragment>
        )
    }
}

export default bookDetail