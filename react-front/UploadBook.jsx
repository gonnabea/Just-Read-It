import React from "react";
import Title from "./title";

const inputstyle={
    margin:"10px",
    display:"flex",
    flexDirection:"coulumn",
    color:"red",

}
const griarea={
    display:"flex",
    justifyContent:"center",

}
const flex_box={
    display:"felx",
    textAlign:"center",
    flexDirection: "column",
    marginTop:"10rem",
    backgrounColor:"red",
    border:"1px solid red",
    borderRadius:"30px",
    padding:"1rem",
    boxShadow:`3px 3px 5px 0px rgba(0,0,0,0.75),
    -2.5px -2px 5px 3px rgba(0,0,0,0.75)`,
}

class uploadBook extends React.Component{

    
    render(){
        return (
            <div>
            <Title />
            <div style={griarea} >
        <form action={this.props.routes.addBook} method="post" enctype="multipart/form-data" style={flex_box}>
            <input type="text" name="bookname" placeholder="책 제목" required="true" style={inputstyle}/>
            <input type="textarea" name="bookDescription" placeholder="책 상세설명" style={inputstyle}/>
            <input type="text" name="author" placeholder="작가 이름" style={inputstyle}/>
            <input type="file" name="bookImage" style={inputstyle}/>
            <input type="submit" value="제출" style={inputstyle}/>
        </form>
        </div>
        </div>
        )
    }
}

export default uploadBook;