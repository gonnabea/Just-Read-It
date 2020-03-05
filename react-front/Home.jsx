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
    grid-area: span 1 / span 4;
    
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
    width:15rem;
    height:100%;
    margin-top:1rem;
    margin-left:1rem;

    @media screen and (max-width: 1300px)
    { 
        position:relative;
        width:10rem;
    }

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
const Reflex = styled.div`
    display:flex;
    flex-direction:column-reverse;
`;
const Grid_box = styled.div`
    display:grid;
    grid-template-columns: repeat(5,1fr);

    text-align:center;

     
    @media screen and (max-width: 1300px)
    { 
        text-align:center;

        grid-template-columns: repeat(3,1fr);
    }

`;

const Text_box = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    overflow:hidden;
`;

const Spantwo = styled.span`
width:100%;
 text-overflow: hidden;    
    overflow: hidden;
`;

const H_one = styled.h1`
    font-size: 1rem;
    text-align:center;
     @media screen and (max-width: 1300px)
    { 
        font-size: 0.7rem;
    }
`;

const H_two = styled.h2`
        font-size: 0.7rem;

 @media screen and (max-width: 1300px)
    {
        font-size: 0.5rem;

    }
`;
const Header_line = styled.div`
    margin-top: 15vh;
`;

function Home(props) {


    function recommendList() {
        if (props.recomendBooks) {
            return (
                <h4 >
                    {props.user.username}님만을 위한 추천 리스트 :
                    </h4>
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
                <Header_line>
                    <div>
                        <a href={props.routes.bookDetail(book.id)}>
                            <Image src={book.imageUrl} alt={book.imageUrl} />
                            <Text_box className="text_box" >
                                <H_one>{book.title}</H_one>
                                <H_two>작가 : {book.author}</H_two>
                                <Spantwo>({book.enrolledBy[0].username}님이 등록)</Spantwo>
                                <Spantwo>{JSON.stringify(book.createdAt)}</Spantwo>
                                {/* <Spantwo>{book.description}</Spantwo> */}
                            </Text_box>
                        </a>
                    </div>
                </Header_line>
            )
        })

    //ReactDOM.render(<Join/>, document.getElementById("root"));
    return (
        <BaseLayout>
            <GlobalStyle />
            {Header(props)}
                <Grid_box>
                    {bookList}
                    <Recom_div>
                        {recommendList()}
                        <Ul>
                            {recomSys()}
                        </Ul>
                    </Recom_div>
                </Grid_box>
        </BaseLayout>
    );
}

export default Home;