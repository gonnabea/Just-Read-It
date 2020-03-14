import React from "react";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

 
const Divs = styled.div`
    /* width:100%; */
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-position:center center;
    background-size:100% 100%;
    background-image:url("https://cdn.pixabay.com/photo/2020/02/24/18/09/background-4877012_960_720.jpg");
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
    border-radius:5px;
    background-color:rgba(229, 224, 149, 0.582);
    align-items:center;
    justify-content:center;
    z-index:2;

    &:hover{
        animation: box_hover 1s linear forwards;
    }

    @keyframes box_hover{
        0%{

        }
        100%{
            box-shadow: 0px 10px 5px 1px rgba(0,0,0,0.75);

        }
    }
`;

const Input = styled.input`
    margin:0.4rem;
    width:20vh;
    `;
const Ainput = styled.textarea`
    margin:0.4rem;
    width:20vh;

`;
const Form ={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    textAlign:"center",
}



const Image_box = styled.div`
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
`;

const Image = styled.img`
    position:relative;
    widht:100%;
    z-index:1;
`;

const KaKao_form ={
    marginTop:"0.4rem",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",

}



class uploadBook extends React.Component {


    render() {
 
        return (
            <BaseLayout>
                <GlobalStyle />
                <div >
                    {Header(this.props)}
                </div>
                <Divs>

                    <Box_img>
                        <form style={Form}  action={this.props.routes.addBook} method="post" enctype="multipart/form-data">
                            <Input type="text" name="bookName" placeholder="책 제목" required="true" />
                            <Ainput type="textarea" name="bookDescription" placeholder="책 상세설명" />
                            <Input type="text" name="author" placeholder="작가 이름" />
                            <Input style={{ color: "red", cursor: "pointer" }} type="file" name="bookImage" accept="image/*" />
                            <Input style={{ cursor: "pointer" }} type="submit" value="등록하기" />
                        </form>

                        <div style={{marginTop:"0.3rem"}}>카카오 책에서 찾아보기</div>
                        <form style={KaKao_form}  id="kakaoBook" method="get">
                            <input style={{width:"16vh"}} type="text" id="target"   placeholder="책 제목을 입력하세요" />
                            <input style={{ cursor: "pointer",margin:"0.2rem" }}  type="submit" value="검색" />
                        </form>

                    </Box_img>
                    <Image_box>

                        <Image src="https://cdn.pixabay.com/photo/2019/07/23/02/19/laurel-4356464_960_720.png" />
                    </Image_box>
                </Divs>
                <script src="/vanilla/uploadBook.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
            </BaseLayout>
        )

    }
}

export default uploadBook;