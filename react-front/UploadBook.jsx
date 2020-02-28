import React from "react";
import Title from "./title";

class uploadBook extends React.Component {


    render() {
        return (
            <div>
                <Title />
                <div >
                    <form action={this.props.routes.addBook} method="post" enctype="multipart/form-data">
                        <input type="text" name="bookName" placeholder="책 제목" required="true"/>
                        <input type="textarea" name="bookDescription" placeholder="책 상세설명"/>
                        <input type="text" name="author" placeholder="작가 이름" />
                        <input type="file" name="bookImage" />
                        <input type="submit" value="제출" />
                    </form>
                </div>
            </div>
        )
    }
}

export default uploadBook;