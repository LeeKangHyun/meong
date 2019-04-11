import { all, fork } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export default function* rootSaga() {
  yield all([
    fork(helloSaga),
  ])
}
