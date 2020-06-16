import React, { Component } from 'react';

const BookList = ({bookList, handleCoverClick}) => {

    // 기부받은 책 리스트 행렬 N by 3 으로 생성
    const generateBookList = (bookListData) => {
        const repeatIndex = Math.ceil(bookListData.length/3);
       
        return _.times(repeatIndex, function(idx) {
            return(
                <div className="company_img_area" key={idx}>
                    {
                        bookListData[3*idx] ?
                        <ul className="company_img_box gt-f-l" style={{"marginRight": "31px", "cursor":"pointer"}} onClick={handleCoverClick} data-bookid={bookListData[3*idx].bookId}>
                            <li><img src={bookListData[3*idx].bookCoverUrl}/></li>
                            <li className="company_img_ci_title">{bookListData[3*idx].bookName}</li>
                            <li className="company_img_ci_text">{bookListData[3*idx].bookGuide}</li>
                        </ul>: undefined
                    }
                    {
                        bookListData[3*idx+1] ?
                        <ul className="company_img_box gt-f-l" style={{"marginRight": "31px", "cursor":"pointer"}} onClick={handleCoverClick} data-bookid={bookListData[3*idx+1].bookId}>
                            <li><img src={bookListData[3*idx+1].bookCoverUrl}/></li>
                            <li className="company_img_ci_title">{bookListData[3*idx+1].bookName}</li>
                            <li className="company_img_ci_text">{bookListData[3*idx+1].bookGuide}</li>
                        </ul>: undefined
                    }
                    {
                        bookListData[3*idx+2] ?
                        <ul className="company_img_box gt-f-l" style={{"cursor":"pointer"}} onClick={handleCoverClick} data-bookid={bookListData[3*idx+2].bookId}>
                            <li><img src={bookListData[3*idx+2].bookCoverUrl}/></li>
                            <li className="company_img_ci_title">{bookListData[3*idx+2].bookName}</li>
                            <li className="company_img_ci_text">{bookListData[3*idx+2].bookGuide}</li>
                        </ul>: undefined
                    }
                </div>
            )
        })
    }
    return (
        <div>
            {generateBookList(bookList)}
        </div>
    )
}

export default BookList;