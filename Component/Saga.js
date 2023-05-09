import {put, takeEvery} from 'redux-saga/effects'
import {USER_LIST,SELECT_USER} from './redux/Constant'

function* userlist (){
    const url = "https://644a1aec79279846dcded570.mockapi.io/fashion" 
    let data = yield fetch(url);
    data = yield data.json();
    yield put({type:SELECT_USER,data})
    // console.log("data aavi gya", data)
}

function* sagadata(){
    yield takeEvery(USER_LIST,userlist);
}

export default sagadata;