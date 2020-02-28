import React from "react";



const style={
    display:"flex",
    margin:"1rem",
    width:"50vh",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
}
const reco_list ={
    width:"90%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    listStyle:"none",

    // flexDirection:"column",

    overflow:"auto",
    overflowY: "visible",
}
const reco={
    display:"flex",
    flexDirection:"column",
    margin:"0.4rem",
}
const img_size={
    width:"10vh",
}

export default function Recommend(){

    return(

        <div className="recommend" style={style} >
           for you recommended
            <ul className="reco_list" style={reco_list}>
                <li className="reco" style={reco}>
                  <a style={reco} href="" >
                    <img style={img_size} src="https://cdn.pixabay.com/photo/2016/09/09/05/42/bestsellers-1656185_1280.png" alt=""/>
                    <span className="title">
                        is it title
                    </span>
                    </a>
                </li>
                <li className="reco" style={reco}>
                    <a style={reco} href="" >
                    <img style={img_size} src="https://cdn.pixabay.com/photo/2016/05/07/08/37/scrapbook-1377226_1280.png" alt=""/>
                    <span className="title">
                        is it title
                    </span>
                    </a>
                </li>
                <li className="reco" style={reco}>
                    <a style={reco} href="" >
                    <img style={img_size} src="https://cdn.pixabay.com/photo/2016/05/07/08/37/scrapbook-1377226_1280.png" alt=""/>
                    <span className="title">
                        is it title
                    </span>
                    </a>
                </li>
                <li className="reco" style={reco}>
                    <a style={reco} href="" >
                    <img style={img_size} src="https://cdn.pixabay.com/photo/2016/05/07/08/37/scrapbook-1377226_1280.png" alt=""/>
                    <span className="title">
                        is it title
                    </span>
                    </a>
                </li>
                <li className="reco" style={reco}>
                    <a style={reco} href="" >
                    <img style={img_size} src="https://cdn.pixabay.com/photo/2016/05/07/08/37/scrapbook-1377226_1280.png" alt=""/>
                    <span className="title">
                        is it title
                    </span>
                    </a>
                </li>
                <li className="reco" style={reco}>
                    <a style={reco} href="" >
                    <img style={img_size} src="https://cdn.pixabay.com/photo/2016/05/07/08/37/scrapbook-1377226_1280.png" alt=""/>
                    <span className="title">
                        is it title
                    </span>
                    </a>
                </li>
            </ul>
        </div>
    );

}