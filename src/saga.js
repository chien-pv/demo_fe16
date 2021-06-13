import { fork, take, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import {fetchSU} from './actions';
import axios from 'axios';
export function * saga(){
    // yield fork(todoFork);
    yield takeEvery('FETCH-DATA', fetchData)
    // yield fork(useFork);
}

function getTodos() {
    return axios.get('https://60b33e621bec230017bf35d7.mockapi.io/todos');
}

function * fetchData(){
    console.log("fetchData");
    let res = yield call(getTodos);
    console.log(res);
    if(res.status == "200"){
        yield put(fetchSU(
            res.data
        ))
    } else {

    }
}