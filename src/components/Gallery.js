import React, { Component } from 'react'
import styled from 'styled-components'
import SweetDelights from './SweetDelights'

const Wrapper = styled.main`
  background-color: lightblue;
`

const Container = styled.div`
  margin: 0 3rem;
  background-color: lightgreen;
`
const Heading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 3rem 0;
  background-color: lightgoldenrodyellow;
`

class Gallery extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Heading>commerical</Heading>
          <SweetDelights />

          <Heading>residential</Heading>
        </Container>
      </Wrapper>
    )
  }
}

export default Gallery
