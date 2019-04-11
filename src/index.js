// @flow
import React, { Component } from 'react'
// import { Provider } from 'react-redux'

import Route from './config/route'
// import initStore from '@/Store'
// import rootSaga from '@/Store/Sagas'

// const store = initStore()
// store.runSaga(rootSaga)

export default class App extends Component {
  render() {
    return <Route />
    /*return (
      <Provider store={store}>
        <Route />
      </Provider>
    )*/
  }
}
