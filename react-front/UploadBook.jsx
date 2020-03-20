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
    background-image:url("https://cdn.pixabay.com/photo/2015/04/12/17/22/once-upon-a-time-719174_1280.jpg");
`;

const Box_img = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    width:30vw;
    height:20vw;
    margin:1rem;
    top:25%;
    border-radius:5px;
    background-color:rgba(229, 224, 149, 0.7);
    align-items:center;
    justify-content:center;
    z-index:2;

    &:hover{
        animation: box_hover 0.5s linear forwards;
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
    margin:0.5vw;
    width:20vw; 
    height: 2vw;
    /*background: linear-gradient(21deg, #10abff, #1beabd);*//*https://codepen.io/rikschennink/pen/rpNGyy*/
    background:none;
    border: solid 0px;
    font-size:1vw;
    border-bottom: solid 0.15vw white;
    
    ::placeholder{
        color: white;
        text-align:center;
    }
    :focus{
        color:#F6B93B;
        outline: none;
        animation: makeBorder 0.4s linear forwards;
        ::placeholder{
        color:#F6B93B;
        text-align:center;
        
    }
        
        @keyframes makeBorder {
            0%{
                background:none;
            }
            100%{
                border-bottom: solid 0.2vw #F6B93B;
                background-color:white;
            }
        }
    }
`;

const Ainput = styled.textarea`
     margin:0.5rem;
    width:20vw; 
    height: 2vw;
    /*background: linear-gradient(21deg, #10abff, #1beabd);*//*https://codepen.io/rikschennink/pen/rpNGyy*/
    background:none;
    border: solid 0px;
    font-size:1vw;
    border-bottom: solid 0.15vw white;
    
    ::placeholder{
        color: white;
        text-align:center;
    }
    :focus{
        color:#F6B93B;
        outline: none;
        animation: makeBorder 0.4s linear forwards;
        ::placeholder{
        color:#F6B93B;
        text-align:center;
        
    }
        
        @keyframes makeBorder {
            0%{
                background:none;
            }
            100%{
                border-bottom: solid 0.2vw #F6B93B;
                background-color:white;
            }
        }
    }
`;

const Form = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
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
    width:100%;
    z-index:1;
`;

const KaKao_form = {
    marginTop: "0.4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

};

const Kakao_list = styled.section`
    position:absolute;
    top:100%;
    display:grid;
    grid-template-columns: repeat(5,1fr);
    grid-row-gap:15vh;
    grid-column-gap:3vh;
    background-position:center center;
    background-size:100% 100%;
    background-repeat:repeat;
    background-image:url("https://cdn.pixabay.com/photo/2016/11/21/00/25/philatelist-1844078_1280.jpg");
    &>div{
        display:block;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;
        color:black;
        overflow-y:auto;
        text-overflow:scroll;
        overflow-x: hidden;
        height:43.5vh;

        button{
            z-index:4;
            margin-bottom:2vh;
            color:red;
            :hover{
                cursor:pointer;
            }
            :active{
            }
        }
        a{
            margin-bottom:1vh;
            opacity:0.85;
            :hover{
                opacity:1;
                color:black;
            }
            color:rgb(255, 255, 255);
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
         
        }
    }
`;

const Submit = styled.input`
    width:7vw;
    height:3vw;
    background-color:white;
    text-align: center;
    font-weight:700;
    font-size:2vh;
    border: solid .3vh black;
    
    :hover{
    
        color:white;
        border:none;
        animation: button-color 0.3s linear forwards;
        @keyframes button-color {
            0%{
                background-color: white;
            }
            100%{
                background-color:#F6B93B;
            }
        }
    }
`

const InputFile = styled.input`
[type="file"] {
    display: none;
}
`
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
                        <form autocomplete="off" style={Form} action={this.props.routes.addBook} method="post" enctype="multipart/form-data">
                            <Input type="text" id="bookTitle" name="bookName" placeholder="책 제목" required="true" />
                            <Ainput type="textarea" id="bookDescription" name="bookDescription"  placeholder="책 상세설명" />
                            <Input type="text" name="author" id="bookAuthor"  placeholder="작가 이름" />
                            <section>
                            <InputFile style={{ color: "#EF6C00", cursor: "pointer" }} id="bookThumbnail" type="file" name="bookImage" accept="image/*" />
                            <select id="genres" name="genre"required="true">
                                <option value="">장르를 선택하세요</option>
                                <option value="소설">소설</option>
                                <option value="자기계발서">자기계발서</option>
                                <option value="개발관련서적">개발관련서적</option>
                                <option value="자서전">자서전</option>
                                <option value="해외서적">해외서적</option>
                                <option value="기타">기타</option>
                            </select>
                            <h5>{this.props.msg}</h5>
                            </section>
                            <Submit style={{ cursor: "pointer" }} type="submit" value="등록하기" />
                        </form>

                        <div style={{ marginTop: "0.3rem" }}>카카오 책에서 찾아보기
                        <form autocomplete="off" style={KaKao_form} id="kakaoBook" method="get">
                            <Input  type="text" id="target" placeholder="책 제목을 입력하세요" autocomplete="off" />
                            <Submit  style={{ cursor: "pointer", margin: "0.2rem" }} type="submit" value="검색" />
                        </form>
                        </div>
                    </Box_img>
                    <Kakao_list id="resultScreen"></Kakao_list>
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