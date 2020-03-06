import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

const Image = styled.img`
    width:100px;
    height:100px;
    border-radius:100%;
    margin:1rem;
`;

const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const A = styled.a`
    margin:0.6rem;
`;

const Grid_area = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;

    @media screen and (max-width: 900px){
   
        grid-template-columns: repeat(3, 1fr);

    }
`;


class profile extends React.Component {
    render() {

        return (
            <BaseLayout>
                <GlobalStyle />
                {Header(this.props)}
                <Div>
                    <Image src={this.props.currentUser.profilePhoto} />
                    <A styled={{ color: "blue" }} href={this.props.routes.editUser(this.props.user.id)}>프로필 수정</A>
                    <h2>{this.props.currentUser.username}님이 등록한 책 리스트:</h2>
                    <Grid_area>
                        {this.props.currentUser.uploadedBooks.map(book => {
                            return (
                                <A href={`/${this.props.routes.bookDetail(book.id)}`}>
                                    <Image src={`/${book.imageUrl}`} alt="" />
                                    <h1>{book.title}</h1>
                                    <h3>{book.author}</h3>
                                    <h4>{book.description}</h4>
                                </A>
                            )
                        })}
                    </Grid_area>
                </Div>
            </BaseLayout>
        )
    }

}

export default profile