import React from "react";
import Title from "./title";


const style = {
    display: "inline-block",
    alignItems: "center",
    margin: "1rem",
    padding: "0",


}
const book_info = {
    display: "felx",
    flexDirectionL: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    margin: "0",
}
const aTagStyle = {
    textDecoration: "none",
    color: "black",
    textAlign: "center",

}

const img_box = {
    borderRadius: "10px",
    width: "30vh",
    boxShadow: `2px 5px 3px 2px rgba(0,0,0,0.75),
    -2px -2px 1px 0px rgba(0,0,0,0.75)`,
    marginTop: "2rem",
    postion: "relative",
    transformStyle: "preserve-3d",
    // transform:"rotateY(45deg)",
    animation: "spin 10s linear infinite"

}
class search extends React.Component {
    render() {
        const results = this.props.results
        function CheckSearchResult() {
            if (results[0]) {
                return (
                    <div>
                        <Title />

                        <h1>{results[0].terms[0]} 검색결과 : </h1>
                        {resultScreen}
                    </div>
                )
            } else {
                return (
                    <>
                        <Title />

                        <h1>검색결과가 없습니다.</h1>
                    </>
                )
            }
        }
        console.log(results)
        const resultScreen = results.map(books => {
            return (
                <React.Fragment>
                    <div className="search_list" style={style}>
                        <ul className="book_info" style={book_info}>
                            <a style={aTagStyle} href={`/${this.props.routes.bookDetail(books.id)}`}>
                                <img style={img_box} src={books.imageUrl} />
                                <h1>{books.title}</h1>
                                <h3>{books.author}</h3>
                                <h3>{books.description}</h3>
                            </a>
                        </ul>
                    </div>
                </React.Fragment>
            )
        })

        return (
            //console.log(resultScreen),
            <CheckSearchResult />

        );

    }
}

export default search;