import 'whatwg-fetch';
import { take, takeEvery, call, put, select } from 'redux-saga/effects';
import { fetchTodos } from './routines';

function* fetchTodosWatcherSaga() {
 yield takeEvery(fetchTodos.TRIGGER, fetchTodosFromServer)
}

function* fetchTodosFromServer() {
 try {
   yield put(fetchTodos.request());
   const response = yield call(apiClient.request, '/todos');
   yield put(fetchTodos.success(response.data));
 } catch (error) {
   yield put(fetchTodos.failure(error.message));
 } finally {
   yield put(fetchTodos.fulfill());
 }
}

const apiClient = {
  BASE_URL: 'https://jsonplaceholder.typicode.com',
  request: function(url){
    fetch(BASE_URL + url)
    .then(function(response) {
      return response.text()
    }).then(function(body) {
      document.body.innerHTML = body
    })
  },
}

// All sagas to be loaded
export default [
  fetchTodosWatcherSaga,
];
