import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/*
 * 액션 타입 정의
 */
const SET_MY_APPLY_LIST = 'mypage/SET_MY_APPLY_LIST';
const TOGGLE_VISIBLE = 'mypage/TOGGLE_VISIBLE';
const SET_MY_CHOICE_LIST = 'mypage/SET_MY_CHOICE_LIST';
const SET_COVER_LETTER = 'resume/SET_COVER_LETTER';
const SET_MY_BOOK_LIST = 'mapage/SET_MY_BOOK_LIST';

/*
 * 액션 생성 함수 정의
 */
export const setMyApplyList = createAction(SET_MY_APPLY_LIST);
export const toggleVisible = createAction(TOGGLE_VISIBLE);
export const setMyChoiceList = createAction(SET_MY_CHOICE_LIST);
export const setCoverLetter = createAction(SET_COVER_LETTER);
export const setMyBookList = createAction(SET_MY_BOOK_LIST);

const initialState = Map({
    myApplyList: [],
    myChoiceList: [],
    coverLetter: '',
    myBookList: []
});


//작성중
export default handleActions({

    [SET_MY_APPLY_LIST] : (state, action) => {
        return state.set("myApplyList", action.payload);
    },
    [SET_MY_CHOICE_LIST] : (state, action) => {
        return state.set("myChoiceList", action.payload);
    },
    [SET_COVER_LETTER] : (state, action) => {
        return state.set("coverLetter", action.payload);

    },

    [SET_MY_BOOK_LIST] : (state, action) => {
        return state.set("myBookList", action.payload);
    }

}, initialState);
