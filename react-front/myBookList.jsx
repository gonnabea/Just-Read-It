import React from "react";
import Title from "./title";
import Header from "./Header";
import { BaseLayout } from "./layout";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";


const Flex_box = styled.div`
    display:flex;
    width:100%;
    heigth:100vh;
    align-items:center;
    justify-content:center;

`;

const Grid_box = styled.div`
    position:absolute;
    display:flex;
    width:100%;
    height:30vh;
    bottom:0;
`;

const Bottom_nav = styled.div`
    position:absolute;
    bottom:0;
    margin:0 auto;
    width:100%;
    margin-top:6rem;
`;

const Li = styled.li`
    position: relative;
    bottom: 0;
    margin-bottom: 5rem;
    display:flex;
`;

const ImageSize = styled.img`
    width: 15rem;
    height:15rem;
    transform:rotateY(80deg);
    margin-right:5rem;

    &:hover{
        cursor: pointer;
        animation: book 1s linear ;
    }
    @keyframes book {
        0%{
            /* transform:rotateY(80deg); */
            transform: rotateX(0);
            transform: translateY(0);
        } 
        100%{ 
            /* transform: rotateY(180deg); */
            transform: rotateX(-45deg);
            transform: translateY(20deg);
        }
        
    }
`;

const Side_cover = styled.div`
    width: 30px;
    height:15rem;
    background-color:gray;
    text-overflow:hidden;
    overflow:hidden;
    &:hover{
        cursor: pointer;
        animation: book 1s linear ;
    }
    @keyframes book {
        0%{
            transform: rotateX(0);
            transform: translateY(0);
        } 
        100%{ 
            transform: rotateX(-30deg);
            transform: translateY(15px);
        }
    }
`;

const Back_cover = styled.div`
    margin-left:5rem;

    width: 15rem;
    height:15rem;
    background-color: black;
    color:white;
    text-overflow:hidden;
    overflow:hidden;
    transform:rotateY(80deg);


`;

const Image_box = styled.img`
    width: 25px;
    height:15rem;
    background-color:gray;
    margin-right:-5px;
    &:hover{
        cursor: pointer;
        animation: book 1s linear ;
    }
    @keyframes book {
        0%{
            transform:rotateX(0);
            transform:translateY(0);
        }
        100%{
            transform:rotateX(-30deg);
            transform:translateY(15px);
        }
    }
`;

const Input = styled.input`
    display: block;
    &:hover{
        cursor: pointer;
    }
`;

const A = styled.a`
    position:relative;
    display:flex;
    bottom:0;
    margin-bottom: 5rem;

`;

const Span = styled.span`
    width: 15rem;
    overflow: hidden;

`;

class MyBookList extends React.Component {

    render() {
        const routes = this.props.routes
        return (
            <BaseLayout>
                <GlobalStyle />
                {Header(this.props)}

                <Flex_box>

                    <h2>{this.props.currentUser.username}
                        님의 즐겨찾기 목록:
                    </h2>

                    <Grid_box className="list">
                        {this.props.currentUser.favBooks.map(book => {
                            return (
                                <Li>
                                    <A href={`/${this.props.routes.bookDetail(book.id)}`}>
                                        <ImageSize src={`/${book.imageUrl}`} alt="" />
                                        <Side_cover>
                                            <h3>{book.title}</h3>
                                        </Side_cover>
                                        {/* <h4>{book.author}</h4> */}
                                        <Back_cover>
                                            <span>{book.description}</span>
                                        </Back_cover>
                                        <form action={routes.deleteFavBook(book.id)} method="post">
                                            <Input type="submit" value="즐겨찾기 삭제" />
                                        </form>
                                    </A>
                                </Li>
                            )
                        })}
                    </Grid_box>
                    <Bottom_nav>
                        <img src="../images/shelf.png" alt="" />
                    </Bottom_nav>
                </Flex_box>
            </BaseLayout>
        )
    }

}

export default MyBookList