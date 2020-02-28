import React from "react";
import Title from "./title";

class bookDetail extends React.Component {

    render() {
     
        const user = this.props.user;
        const book = this.props.book;
        const routes = this.props.routes;


        function UserWhoEnrolled() {

            if (user && user.id == book.enrolledBy[0]._id) {
                return (
                    <>
                        <form action={routes.editBook(book.id)} method="post">
                            <input type="text" name="title" placeholder="수정할 이름" value={book.title}/>
                            <input type="textarea" name="description" placeholder="상세내용" value={book.description}/>
                            <input type="text" name="author" placeholder="작가 이름" value={book.author}/>
                            <input type="submit" value="수정하기" />
                        </form>
                        <form action={routes.deleteBook(book.id)} method="post">
                            <input type="submit" value="책 삭제" />
                        </form>
                        <form action={routes.postReview(book.id)} method="post">
                            <input type="text" name="reviewContent" placeholder="책에 대한 평가를 남겨주세요!" />
                            <input type="number" name="rate" placeholder="평점을 남겨주세요" min={0} max={10} value={5} step={.1} />
                            <input type="submit" value="등록" />
                        </form>
                    </>
                )

            } else if (user) {
                return (
                    <>
                        <form action={`/${routes.myBookList(book.id)}`} method="post">
                            <input type="submit" value="즐겨찾기 등록" />
                        </form>
                        <form action={routes.postReview(book.id)} method="post">
                            <input type="text" name="reviewContent" placeholder="책에 대한 평가를 남겨주세요!" />
                            <input type="number" name="rate" placeholder="평점을 남겨주세요" min={0} max={10} value={5} step={.1} />
                            <input type="submit" value="등록" />
                        </form>
                    </>
                )
            }

            else {
                return ""
            }
        }

        function UserWhoRated(review) {
            if (user && review.email == user.email) {
                return (
                    <form action={routes.deleteRate(review.id)} method="post">
                        <input type="submit" value="삭제" />
                    </form>
                )
            }
        }

        let totalStar = "";

        let totalPoint = () => {

            if (this.props.totalRate) {

                if (this.props.totalRate / parseInt(this.props.totalRate) >= 1.1) {
                    for (let i = 0; i < this.props.totalRate; i++) {
                        totalStar += "★";
                    }
                }
                else {
                    for (let i = 0; i < parseInt(this.props.totalRate); i++) {
                        totalStar += "★";
                    }
                }
            }
        }
        totalPoint();


        return (
            <React.Fragment>
                <div className="center_box">
                    < Title />

                    <img src={`/${book.imageUrl}`}/>
                    <h1>{book.title}</h1>
                    <h4>{book.likeFigure}명이 즐겨찾기에 등록</h4>
                    <h3>{JSON.stringify(book.createdAt)}</h3>
                    <h2>{book.author}</h2>
                    <h3>{book.description}</h3>
                    <h3>{totalStar}</h3>
                    <h3>{this.props.totalRate}</h3>
                    <UserWhoEnrolled />
                    {/*each item in book.review
            img(src=item.creatorPhoto width="50vh")
            h3 #{item.creator}
            h3 #{item.content}
            h3 #{item.rate}점
        h4 #{item.createdAt}*/}
                    {book.review.map((item) => {

                        let star = "";


                        const starPoint = () => {

                            if (item.rate) {
                                if (item.rate / parseInt(item.rate) >= 1.1) {
                                    for (let i = 0; i < item.rate; i++) {
                                        star += "★";
                                    }
                                }
                                else {
                                    for (let i = 0; i < parseInt(item.rate); i++) {
                                        star += "★";
                                    }
                                }
                            }
                        }
                        starPoint();
                        return (
                            <div>
                                <img src={item.creatorPhoto} width="50vh" />
                                <h3>{item.creator}</h3>
                                <h3>{item.content}</h3>
                                <h3>{star}</h3>
                                <h3>{item.rate}점</h3>
                                <h3>{JSON.stringify(item.createdAt)}</h3>
                                {UserWhoRated(item)}
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default bookDetail