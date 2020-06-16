import React, { Component } from 'react';
import {BookList, BookPopup} from '../../components'
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { connect } from 'react-redux'; 
import * as bookActions from 'modules/book';
import devtest from 'lib/devtest';
import storage from 'lib/storage';

class BookContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openPopup: false,
            clickedBookId: "",
            applyUserId: "",
        }
    }

    componentDidMount = () => {
        this.setState({
            applyUserId: storage.getUserInfo(),
        });

        // 책 리스트 조회
        this.getBookList();
    }

    getBookList = () => {
        const { BookAction } = this.props;

        axios({
            url: devtest() + "/book",
            method: "get",
            headers: { Pragma: 'no-cache'}
        }).then(
            (res) => {
                if(res.data) {
                    BookAction.setBookList(res.data);
                }
            }
        ).catch(
            (err) => {
                alert("책 목록을 로드하는데 실패하였습니다.");
                console.log(err);
            }
        )
    }

    // 책 표지 클릭시 상세정보 팝업띄움
    handleCoverClick = (e) => {

        const bookId = e.currentTarget.getAttribute("data-bookid");

        const { BookAction } = this.props;

        axios({
            url: devtest() + `/book/${bookId}`,
            method: "get",
            headers: { Pragma: 'no-cache'}
        }).then(
            (res) => {
                if(res.data) {
                    BookAction.setBookInfo(res.data);

                    this.setState({
                        openPopup: true,
                        clickedBookId: bookId
                    })
                }
            }
        ).catch(
            (err) => {
                alert("책 정보를 가져오는데 실패하였습니다.");
                console.log(err);
            }
        )
    }

    // 책 찜하기 버튼 클릭
    handleBookSelect = (bookInfo) => {
        const self = this;
        const { applyUserId,clickedBookId } = this.state;

        const bookId = bookInfo.bookId;

        if (applyUserId == null) {
            this.props.history.push('/login');
            return;
        }

        // 팝업 닫기
        this.setState({
            openPopup: false,
        });
        
        // 책 정보에 찜한 사람 업데이트
        axios({
            url: devtest() + `/book/${bookId}`,
            method: 'put',
            headers: { "Pragma": 'no-cache',
                        "x-access-token": storage.getToken() }
        }).then(
            (res) => {
                storage.setSessionObj(res.headers);
                self.props.history.push('/mypage');
            }
        ).catch(
            (err) => {
                console.log('err 발생');
            }
        )
    }

    // 팝업닫기
    handlePopupClose = () => {
        this.setState({
            openPopup: false
        })
    }

    render() {
        const { openPopup, clickedBookId } = this.state;
        const { bookList, bookInfo } = this.props;
        const { handleCoverClick, handlePopupClose, handleBookSelect } = this;

        return (
            <div>
                <div className="sub-contents">
                    <div className="sub-container">
                        <div className="location">
                            <div className="location-inner">
                                <div className="location-item">홈</div>
                                <div className="location-item">></div>
                                <div className="location-item">나눔 책 소개</div>
                            </div>
                        </div>
                        <div className="sub-info">
                            <h2 className="sub_heading">나눔 책 소개</h2>
                            <br />
                        </div>
                        <div className="sub_box">
                            <div className="apply_step4">
                                <div className="apply_step4_list">
                                    <div>
                                        <div className="line_2_gray"></div>
                                        <BookList bookList={bookList} handleCoverClick={handleCoverClick}></BookList>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {openPopup ? <BookPopup bookInfo={bookInfo} handlePopupClose={handlePopupClose} handleBookSelect={handleBookSelect}></BookPopup> : undefined }
            </div>
        );
    }
}

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
    (state) => ({
        bookList: state.book.get('bookList'),
        bookInfo: state.book.get('bookInfo')
    }), (dispatch) => ({
        BookAction: bindActionCreators(bookActions, dispatch)
    })
)(BookContainer);