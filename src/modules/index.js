import { combineReducers } from 'redux';

import apply from './apply';
import menu from './menu';
import faq from './faq';
import question from './question';
import mypage from './mypage';
import myquestion from './myquestion';
import recruit from './recruit';
import auth from './auth';
import register from './register';
import company from './company';
import book from './book';

export default combineReducers({

    apply,
    menu,
    faq,
    question,
    mypage,
    myquestion,
    recruit,
    auth,
    register,
    company,
    book

})
