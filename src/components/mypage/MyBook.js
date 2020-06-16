import React, { Component } from 'react';
import dateTimeFormat from 'lib/dateTimeFormat';/** 날짜 포맷 변경 공통함수 */

const MyBook = ({myBookList, handleBookCancel}) => {
    return (
        <div>
            <table className="apply_step4_table2_contents">
                <colgroup>
                    <col width="250px"/>
                    <col width="100px"/>
                    <col width="100px"/>
                    <col width="50px"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row">제목</th>
                        <th scope="row">저자</th>
                        <th scope="row">찜 일시</th>
                        <th scope="row"></th>
                    </tr>
                    {
                      myBookList.map((object, i) => {
                          return (
                            <tr key={i} className="mypage_myinfo-item">
                              <td>{object.bookName}</td>
                              <td>{object.bookWriter}</td>
                              <td>{dateTimeFormat(object.chooseDatetime)}</td>
                              <td>
                                  {object.completeYn === "Y" ? "나눔완료" : <button className="normal_red_center_btn" onClick={handleBookCancel} data-bookid={myBookList[i].bookId}>취소하기</button>}
                              </td>
                            </tr>
                          );
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default MyBook;
