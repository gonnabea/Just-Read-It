import React from "react";
import Title from "./title";
import Header from "./Header";
import { BaseLayout } from "./layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";



const Divs = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin:1.4rem;
   
`;

const Box_img = styled.div`
    display:flex;
    flex-direction:column;
    width:30rem;
    height:20rem;
    background-color:rgba(229, 224, 149, 0.582);
    align-items:center;
    justify-content:center;
    box-shadow: 0px 10px 5px 1px rgba(0,0,0,0.75);
`;

const Input = styled.input`
    margin:0.4rem;
`;
const Ainput = styled.textarea`
    margin:0.4rem;

`;


class uploadBook extends React.Component {
    render() {
        return (
            <BaseLayout>
                <GlobalStyle />
                {Header(this.props)}
                <Divs>
                    <Box_img>
                        <form action={this.props.routes.addBook} method="post" enctype="multipart/form-data">
                            <Input type="text" name="bookName" placeholder="책 제목" required="true" />
                            <Ainput type="textarea" name="bookDescription" placeholder="책 상세설명" />
                            <Input type="text" name="author" placeholder="작가 이름" />
                            <Input style={{ color: "red",cursor:"pointer" }} type="file" name="bookImage" accept="image/*" />
                            <Input style={{cursor:"pointer"}} type="submit" value="제출" />
                        </form>
                    </Box_img>
                </Divs>
            </BaseLayout>
        )
    }
}

export default uploadBook;