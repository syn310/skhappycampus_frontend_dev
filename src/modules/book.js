import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/*
 * 액션 타입 정의
 */
const SET_BOOK_LIST = 'book/SET_BOOK_LIST';
const SET_BOOK_INFO = 'book/SET_BOOK_INFO';

/*
 * 액션 생성 함수 정의
 */
export const setBookList = createAction(SET_BOOK_LIST);
export const setBookInfo = createAction(SET_BOOK_INFO);

/*
 * 초기상태 정의
 */
const initialState = Map({
    bookList: [],
    bookInfo: {}
});

/*
 * reducer 작성
 */
export default handleActions({

    [SET_BOOK_LIST] : (state, action) => {
        return state.set('bookList', action.payload)
    },

    [SET_BOOK_INFO] : (state, action) => {
        return state.set('bookInfo', action.payload);
    },

}, initialState);