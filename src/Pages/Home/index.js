import React, { Component, Fragment } from 'react'

import Image from '@/Components/ImagesComponent'

import Content from './Components/Content'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Content />
        <Image source={require('@/images/meong.jpeg')} />
      </Fragment>
    )
  }
}
