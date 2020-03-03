import React from "react";
import Header from "./Header";
import { BaseLayout } from "./layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";


const Div = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Recom_div = styled.div`
    width:40%;
    height:50%;
    display:fixed;
    position:absolute;
    right:0;
    top:0;
    overflow: auto;
    margin-right:1rem;
    margin-top:10.5vh;
`;

const Ul = styled.ul`
    display:flex;
`;

const Li = styled.li`
    display:flex;
    flex-direction:column;
    text-overflow: auto;
    margin-right:1rem;
`;

const Image = styled.img`
    width:20rem;
    height:100%;
    margin-top:1rem;
    margin-left:1rem;
`;
const Span = styled.span`
    text-overflow: hidden;    
    overflow: hidden;
    width:100px;
    height:100px;
`;

const A = styled.a`
    margin-right:1rem; 
    display:flex;
    flex-direction:column;
    text-overflow: hidden;
`;

function Home(props) {


    function recommendList() {
        if (props.recomendBooks) {
            return (
                <h4>{props.user.username}님만을 위한 추천 리스트 : </h4>
            )
        }
    }

    function recomSys() {

        if (props.recomendBooks) {
            return (
                props.recomendBooks.map(argument => {
                    return (
                        <Li>
                            <A href={`/${props.routes.bookDetail(argument.id)}`}>
                                <Image src={argument.imageUrl} />
                                <Span>{argument.title}</Span>
                                <Span>{argument.author}</Span>
                                <Span>{argument.description}</Span>
                            </A>
                        </Li>
                    )
                })
            )
        } else {
            return "";
        }

    }
    const bookList =
        props.books.map(book => {
            return (
                <div className="booklist_home">
                    <div className="grid_box">
                        <a href={props.routes.bookDetail(book.id)}>
                            <Image src={book.imageUrl} alt={book.imageUrl} />
                            <div className="text_box" >
                                <h1>{book.title}</h1>
                                <h2>작가 : {book.author}</h2>
                                <h3>({book.enrolledBy[0].username}님이 등록)</h3>
                                <h3>{JSON.stringify(book.createdAt)}</h3>
                                <h3>{book.description}</h3>
                            </div>
                        </a>
                    </div>


                </div>
            )
        })

    //ReactDOM.render(<Join/>, document.getElementById("root"));
    return (
        <BaseLayout>
            <GlobalStyle />
            {Header(props)}
            {bookList}
            <Recom_div>
                {recommendList()}
                <Ul>
                    {recomSys()}
                </Ul>
            </Recom_div>
        </BaseLayout>
    );
}

export default Home;