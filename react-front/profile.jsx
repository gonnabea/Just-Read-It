import React from "react";
import Title from "./title";
import styled from 'styled-components';
import { BaseLayout } from './layout';

const Xx = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


const style = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyConter: "center",
    alignItems: "center",

}
const buttonStyle = {
    marginTop: "20vh",

}

const StyledComponentExam = styled.h1`
color: red;
`;

// const styledTest = styled.div`
//     color: red;
// `;


// const styledButton = styled.button`
//     margin:3rem;
//     color:red;
// `;
const user_img = {
    width: "30%",
    borderRadius: "100%",
    margin: "2rem",
}
const profileStyle = {
    margin: "3rem",
    textDecoration: "none",
}
const bookdetail = {
    textDecoration: "none",
}
class profile extends React.Component {
    render() {

        return (
            <BaseLayout>
            <div style={style}>
                <Title />
                <img style={user_img} src={this.props.currentUser.profilePhoto} />
                <a style={profileStyle} href={this.props.routes.editUser(this.props.user.id)}>프로필 수정</a>
                <h2>{this.props.currentUser.username}님이 등록한 책 리스트:</h2>
                {this.props.currentUser.uploadedBooks.map(book => {
                    return (
                        <a style={bookdetail} href={`/${this.props.routes.bookDetail(book.id)}`}>
                            <img src={`/${book.imageUrl}`} alt="" />
                            <Xx>{book.title}</Xx>
                            <h3>{book.author}</h3>
                            <h4>{book.description}</h4>
                        </a>
                    )
                })}
                <style jsx>{`
             html, body {
               margin: 0;
               padding:0;
             }
           `}</style>
            </div>
            </BaseLayout>
        )
    }

}

export default profile