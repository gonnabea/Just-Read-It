import React from "react";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";


const Divs = styled.div`
    /* width:100%; */
    height:80vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin:1.4rem;
   
`;

const Box_img = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    width:35rem;
    height:20rem;
    margin:1rem;
    top:25%;
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
const Form ={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    textAlign:"center",
}

class uploadBook extends React.Component {


    render() {

        return (
            <BaseLayout>
                <GlobalStyle />
                <div style={{marginTop:"-1rem"}}>
                    {Header(this.props)}
                </div>
                <Divs>

                    <Box_img>
                        <form style={Form} action={this.props.routes.addBook} method="post" enctype="multipart/form-data">
                            <Input type="text" name="bookName" placeholder="책 제목" required="true" />
                            <Ainput type="textarea" name="bookDescription" placeholder="책 상세설명" />
                            <Input type="text" name="author" placeholder="작가 이름" />
                            <Input style={{ color: "red", cursor: "pointer" }} type="file" name="bookImage" accept="image/*" />
                            <Input style={{ cursor: "pointer" }} type="submit" value="등록하기" />
                        </form>

                        <div>카카오 책에서 찾아보기</div>
                        <form action={this.props.routes.kakaoSearch} method="get">
                            <input type="text" placeholder="책 제목을 입력하세요" />
                            <input type="submit" value="검색" />
                        </form>

                    </Box_img>
                </Divs>
            </BaseLayout>
        )

    }
}

export default uploadBook;