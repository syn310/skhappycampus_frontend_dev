import React, { Component } from 'react';

const BookPopup = ({bookInfo, handlePopupClose, handleBookSelect}) => {

    const handleClick = () => {
        handleBookSelect(bookInfo);
    }

    return(
        <div className="popup_wrap">
            <div className="popup_area">
                {/* <!-- 팝업 헤더 시작 --> */}
                <div className="popup_header">
                    <div className="popup_title gt-f-l">나눔 책 소개</div>
                    <div className="popup_close" onClick={handlePopupClose}></div>
                    <div className="clear"></div>
                </div>
                {/* <!-- 팝업 헤더 끝 --> */}
                {/* <!-- 팝업 컨텐츠 시작 --> */}
                <div className="popup_contents" >
                    <div className="popup_contents_company_title">{bookInfo.bookName}</div>
                    <div className="popup_contents_text">
                        <div className="popup_company_info_area_noscroll">
                            <div className="popup_company_info_img gt-f-l"><img src={bookInfo.bookCoverUrl}/></div>
                            {/* <div> */}
                            <table className="popup_company_info_table" id="companyTbl">
                                
                            </table>
                        </div>
                    </div>
                </div>
                <div className="popup_button_notice_area">
                    <button className="popup_button_btn" onClick={handleClick}>찜하기</button>
                </div>
            </div>
        </div>
    )
}

export default BookPopup;