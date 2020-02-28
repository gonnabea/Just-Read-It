import React from "react";
import Title from "./title";
import styled from 'styled-components';
import { BaseLayout } from './layout';


class profile extends React.Component {
    render() {

        return (
            <BaseLayout>
            <div>
                <Title />
                <img src={this.props.currentUser.profilePhoto} />
                <a href={this.props.routes.editUser(this.props.user.id)}>프로필 수정</a>
                <h2>{this.props.currentUser.username}님이 등록한 책 리스트:</h2>
                {this.props.currentUser.uploadedBooks.map(book => {
                    return (
                        <a href={`/${this.props.routes.bookDetail(book.id)}`}>
                            <img src={`/${book.imageUrl}`} alt="" />
                            <h1>{book.title}</h1>
                            <h3>{book.author}</h3>
                            <h4>{book.description}</h4>
                        </a>
                    )
                })}
            
            </div>
            </BaseLayout>
        )
    }

}

export default profile