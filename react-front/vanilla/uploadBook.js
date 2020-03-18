const kakaoUpload = document.getElementById("kakaoBook");
const bookTitle = document.getElementById("target");
const resultScreen = document.getElementById("resultScreen");
const bookTitle2 = document.getElementById("bookTitle");
const bookDescription = document.getElementById("bookDescription");
const bookAuthor = document.getElementById("bookAuthor");
const bookThumbnail = document.getElementById("bookThumbnail");


/*
const client = async(e) =>{ 
    console.log(bookTitle.value)
    console.log(e);
    e.preventDefault();
    try {
      await axios.get("https://dapi.kakao.com/v3/search/book",{
        query: bookTitle.value}
        ,
        {headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Host': 'dapi.kakao.com',
          'Authorization': 'KakaoAK 2f0ccf520e86aab3f7366d1b04a1aadc'
        }
      }).then(function(msg){
        console.log(msg);})
    } catch (error) {
      console.log(error.response);
    }
  
}  
*/
let bookList
const findBooks = async e => {
  console.log(bookTitle.value)
    console.log(e);
    e.preventDefault();
    resultScreen.innerHTML= "";
  try {
    const kakaoApi = await axios.get("https://dapi.kakao.com/v3/search/book", {
      params: { query: bookTitle.value },
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "KakaoAK 8efbd07fbb76bd00a26b6203eb5a57b6"
      }
    });
    bookList = kakaoApi.data.documents;
    console.log(bookList);
    const result = bookList.map((book)=>{
      const span = document.createElement("span")
      const img = document.createElement("IMG")
      const p = document.createElement("p")
      const span2 = document.createElement("span");
      const a = document.createElement("a");
      const div = document.createElement("div");
      const btn = document.createElement("button");
      
      return (
        img.src = book.thumbnail,
        a.appendChild(img),
        span.innerHTML = book.title,
        a.appendChild(span),
        span2.innerHTML = book.authors[0],
        a.appendChild(span2),
        p.innerHTML = book.contents,
        a.appendChild(p),
        a.href= book.url,
        
        btn.innerHTML = "선택",
        div.appendChild(btn),
        div.appendChild(a),
        resultScreen.appendChild(div),
        btn.addEventListener("click", ()=>{
          bookTitle2.value = book.title;
          bookDescription.value = book.contents;
          bookAuthor.value = book.authors[0];
        })
      )
    })
    console.log(result)
    window.scrollTo({  
      top:400,
      behavior: "smooth"
    });
  } catch (error) {
    console.log(error.response);
  }
};


/*
import axios from 'axios';
import { parseDateString } from '../utils/formatter';
import { DAUM_API_URL, DAUM_API_KEY } from '../config.js';

const client = axios.create({
  baseURL: `${DAUM_API_URL}`,
  method: 'post',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Host': 'dapi.kakao.com',
    'Authorization': `KakaoAK ${DAUM_API_KEY}`,
  },
  timeout: 10000 // 타임아웃 10초
});

/**
 * 
 * @param {*} query 검색을 원하는 질의어
 * @param {*} size 한 페이지에 보여질 문서의 개수(1-50 사이)
 * @param {*} page 결과 페이지 번호(1-100 사이)
 * @param {*} sort 결과 문서 정렬 방식(accuracy:정확도순, latest:최신순)
 * @param {*} target 검색 필드 제한(title:제목, isbn:ISBN, publisher:출판사, person:인명)
 
export const searchBook = (query = '', page = '1', size = 10, sort = 'sim', target = '') => {
  const params = {
    query,
    size,
    page,
    sort,
    target
  };
  return client.get('/v3/search/book', {
      params
    })
    .then(({
      status,
      statusText,
      data
    }) => {
      if (status === 200) {
        const {
          meta: {
            is_end, // 현재 페이지가 마지막 페이지인지 여부(false이면 다음 페이지를 요청할 수 있음)
            pageable_count, // 검색 결과로 제공 가능한 문서수
            total_count, // 전체 검색된 문서수
          },
          documents
        } = data;

        const result = {
          isEnd: is_end,
          pageableCount: pageable_count,
          totalCount: total_count,
          items: (documents && documents.length) ? documents
            .filter(({
              thumbnail
            }) => !!thumbnail) // 표지 이미지 없는 책은 제외
            .map(({
              title, // 도서 제목
              contents, // 도서 소개
              url, // 도서 상세 URL
              isbn, // 국제 표준 도서번호(ISBN10 ISBN13)
              datetime, // 도서 출판날짜(ISO 8601)
              authors, // 도서 저자 리스트
              publisher, // 도서 출판사
              translators, // 도서 번역자 리스트
              price, // 도서 정가
              sale_price, // 도서 판매가
              thumbnail, // 도서 표지 썸네일 URL(120x174)
              status // 도서 판매 상태 정보(정상, 품절, 절판)
            }, index) => {
              return {
                id: String(((page - 1) * size) + index),
                title: title,
                contents,
                url,
                isbn: isbn ? isbn.split(' ') : [],
                authors: typeof(authors) === 'string' ? [authors] : authors,
                translators: typeof(translators) === 'string' ? [translators] : translators,
                pubdate: parseDateString(datetime),
                publisher,
                thumbnail,
              }
            }) : []
        }
        return result;
      } else {
        throw new Error(`${status}:${statusText}`);
      }
    })
}
*/

function uploadBookApi(e){
    e.preventDefault();
    console.log(bookTitle.value);
    
}


function init(){
kakaoUpload.addEventListener("submit", findBooks);
};

init();