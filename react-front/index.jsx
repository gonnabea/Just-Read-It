import React from "react";
import routes from "../routes";
import user from "../model/user";
import Header from "./Header";
import Container from "./Container";


//const Home = pug.complieFile("Home.pug");

// const ul = document.createElement("ul");
// const li = document.createElement("li");

// const divs = document.querySelector(".container");

function container() {


    // ul.appendChild(li);
    // ul.className = "booklist";
    // li.className = "booklist_more";
    // li.innerHTML = "bookList";
    // divs.appendChild(ul);


    return (
        <div className="container">
            <ul>
                <li className="not_yet">booklist</li>
                <li className="not_yet">booklist</li>
            </ul>
            <Container />
        </div>

    );
}

class index extends React.Component {

    render() {
        return (
            <div id="root">
                <Header />
                {container()}
            </div>
        );

    }
}

export default index;
