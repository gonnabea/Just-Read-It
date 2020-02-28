import React from "react";
import Title from "./title";

class bookDetail extends React.Component {

    render() {
        const bookimg = {
            margin: "1rem",
            borderRadius: "10px",
            boxShadow: `2px 2px 2px 0px rgba(0,0,0,0.75),
            1px 2px 3px 3px rgba(0,0,0,0.75)`,
        }
        const title = {
            padding: "0.7rem",
            border: "1px solid red",
            width: "50%",
            borderRadius: "10px",
            boxShadow: `2px 2px 2px 0px rgba(0,0,0,0.75),
            1px 2px 3px 3px rgba(0,0,0,0.75)`,
        }
        const inmargin = {
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
        }
        const centerBox = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: "500",
            color: "blue",
            textAlign: "center",
        }

        const inputstyle = {
            margin: "5px",
            borderRadius: "10px",

        }
        const reviewset = {
            margin: "0.8rem",
            textAlign: "center",
        }

        const postReview = {
            margin: "5px",
        }

        const reviewStyle = {
            boxShadow: ` 0.1px 2px 0.5px 0.5px rgba(0,0,0,0.75),
            -0.1px -0.1px 0.5px 0.5px rgba(0,0,0,0.75)`,
            margin: "0.8rem",
            textAlign: "center",
            width: "60%",
        }
        const reimg = {
            margin: "0.7rem",
            borderRadius: "100%",
            width: "20%",
        }
        //

        const user = this.props.user;
        const book = this.props.book;
        const routes = this.props.routes;


        function UserWhoEnrolled() {

            if (user && user.id == book.enrolledBy[0]._id) {
                return (
                    <>
                        <form action={routes.editBook(book.id)} method="post" style={inmargin}>
                            <input type="text" name="title" placeholder="수정할 이름" value={book.title} style={inputstyle} />
                            <input type="textarea" name="description" placeholder="상세내용" value={book.description} style={inputstyle} />
                            <input type="text" name="author" placeholder="작가 이름" value={book.author} style={inputstyle} />
                            <input type="submit" value="수정하기" />
                        </form>
                        <form action={routes.deleteBook(book.id)} method="post" style={reviewset}>
                            <input type="submit" value="책 삭제" />
                        </form>
                        <form action={routes.postReview(book.id)} method="post" style={postReview}>
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
                        <form action={routes.postReview(book.id)} method="post" style={postReview}>
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
                <div className="center_box" style={centerBox}>
                    < Title />

                    <img src={`/${book.imageUrl}`} style={bookimg} />
                    <h1 style={title}>{book.title}</h1>
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
                            <div style={reviewset}>
                                <img style={reimg} src={item.creatorPhoto} width="50vh" />
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