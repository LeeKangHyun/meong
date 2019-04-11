import React, { Component, Fragment } from 'react'

import Image from '@/Components/ImagesComponent'
import Title from '@/Components/Title'

import Content from './Components/Content'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Title label="멍이의 일상"/>
        <Content />
        <Image source={require('@/images/meong.jpeg')} />
      </Fragment>
    )
  }
}
