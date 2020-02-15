import React from "react";
import routes from "../routes"

class uploadBook extends React.Component{
    render(){
        return (<form action={routes.addBook} method="post" enctype="multipart/form-data">
            <input type="text" name="bookname" placeholder="책 제목" required="true"/>
            <input type="text" name="bookDescription" placeholder="책 상세설명"/>
            <input type="text" name="author" placeholder="작가 이름"/>
            <input type="file" name="bookImage"/>
            <input type="submit" value="제출"/>
        </form>
        )
    }
}

export default uploadBook;