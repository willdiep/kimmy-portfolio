import React, { Component } from 'react'
import styled from 'styled-components'
import { sweetDelightsData } from '../data'

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 1rem;
`

const Figure = styled.figure`
  background-color: yellow;
  display: flex;
`

const Img = styled.img`
  /* height: 80%; */
  width: 100%;
`
const Heading = styled.h3`
  background-color: red;
  text-transform: uppercase;
  padding: 1rem 0;
`

class SweetDelights extends Component {
  render() {
    return (
      <>
        <Heading>Sweet Delights Cafe</Heading>
        <Article>
          {sweetDelightsData.map((item) => {
            return (
              <Figure>
                <Img src={item.img} alt='' />
              </Figure>
            )
          })}
        </Article>
      </>
    )
  }
}

export default SweetDelights
