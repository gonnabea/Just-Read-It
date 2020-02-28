import React from "react";
import Title from "./title";


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
                    <div className="search_list">
                        <ul className="book_info">
                            <a href={`/${this.props.routes.bookDetail(books.id)}`}>
                                <img src={books.imageUrl} />
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