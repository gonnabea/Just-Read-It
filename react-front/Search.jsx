import React from "react";
class search extends React.Component{
    render(){
        const results = this.props.results
            function CheckSearchResult() {
                if(results[0]){
                    return (
                        <div>
                <h1>{results[0].terms[0]} 검색결과 : </h1>
                {resultScreen}
            </div>
                    )
                }else{
                    return (
                        <h1>검색결과가 없습니다.</h1>
                    )
                }
            }
        console.log(results)
        const resultScreen = results.map( books => {
            return (
             <a href={`/${this.props.routes.bookDetail(books.id)}`}>
            <img src={books.imageUrl}/>
            <h1>{books.title}</h1>                                                                                                                                                                                                                                                                                                                                       
            <h3>{books.author}</h3>
            <h3>{books.description}</h3>
            </a>   
            )
        })
        
        return (
        console.log(resultScreen),
        <CheckSearchResult/>
        
        );
    
}
}

export default search;