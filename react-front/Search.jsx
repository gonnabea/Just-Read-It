import React from "react";
class search extends React.Component{
    render(){
        const results = this.props.results
        console.log(results)
        const resultScreen = results.map( (books) => {
            return (
             <React.Fragment>
            <img src={books.imageUrl}/>
            <h1>{books.title}</h1>                                                                                                                                                                                                                                                                                                                                       
            <h3>{books.author}</h3>
            </React.Fragment>   
            )
        })
        
        return (
        console.log(resultScreen),
        <div>
            <h1>{results[0].terms[0]} 검색결과 : </h1>
            {resultScreen}
        </div>
        
        );
    
}
}

export default search;