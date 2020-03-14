import React from "react";
import { BaseLayout } from "./globalStyles/layout";
import Header from "./globalStyles/Header";
import GlobalStyle from "./globalStyles/ResetCss";

function ErrorPage(){
    return (
        <BaseLayout>
          <GlobalStyle />
            <Header/>
            <h1>404 Page error!</h1>
            <h4>찾으시는 책이 삭제되었거나 일시적으로 오류가 있을 수 있습니다.</h4>
        </BaseLayout>
    )
}

export default ErrorPage;