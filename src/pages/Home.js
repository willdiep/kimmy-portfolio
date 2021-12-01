import React, { Component } from 'react'
import styled from 'styled-components'
import data from '../data.json'

import Navbar from '../components/Navbar'
import Overview from '../components/Overview'

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  background-color: orange;
  display: flex;
`

const ImageWrap = styled.div`
  flex: 1 1 50%;
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  img {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

class Home extends Component {
  render() {
    return (
      <>
        <Navbar/>
        {/* <Overview /> */}
        <Container>
          <ImageWrap>
            <img
              src={data.serenityDental.imgCollection[0].img}
              alt='commercial'
            />
          </ImageWrap>

          <ImageWrap>
            <img
              src={data.pineyPointCustomHome.imgCollection[0].img}
              alt='residential'
            />
          </ImageWrap>
        </Container>
      </>
    )
  }
}

export default Home
