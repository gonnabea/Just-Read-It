import React from "react";

class profile extends React.Component{
    render(){
        return(
        console.log(this.props.currentUser),
        <a href={this.props.routes.editUser(this.props.user.id)}>프로필 수정</a>
        )
    }

}

export default profile