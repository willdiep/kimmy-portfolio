import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import ImgModal from './ImgModal'

const Container = styled.article`
`

const ThreeByTwoGrid = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 1rem;
`

const ProjectHeader = styled.h3`
  background-color: red;
  text-transform: uppercase;
  padding: 1rem 0;
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const OverlayContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Figure = styled.figure`
  /* background-color: yellow; */
  display: flex;
  position: relative;

  ${OverlayContainer}:hover {
    opacity: 1;
    /* opacity: 0.5; */
    /* background-color: red; */
    z-index: 1;
  }
`

const ViewMoreBtn = styled.button`
  text-transform: uppercase;
  /*  transition: all 0.2s; */
`

export class Project extends Component {
  state = {
    imgModalClicked: false,
  }

  hanndleOverlayClick = () => {
    this.setState(
      {
        imgModalClicked: true,
      },
      console.log('img clicked')
    )
  }

  handleOverlayClose = () => {
    this.setState(
      {
        imgModalClicked: false
      },
      console.log('X clicked')
    )
  }

  generateSixImgs = (data) => {
    const mapSixImgs = data.slice(0, 6).map((item) => {
      return (
        <Figure>
          <Img src={item.img} alt='' />
          <OverlayContainer onClick={() => this.hanndleOverlayClick()}>
            <FontAwesomeIcon icon={faSearchPlus} color='white' size='3x' />
          </OverlayContainer>
        </Figure>
      )
    })
    return mapSixImgs
  }

  render() {
    const { title, project, category, urlPath } = this.props

    console.log(urlPath)

    let path = ''
    if (category === 'residential') {
      path = `/residential/${urlPath}`
    } else if (category === 'commercial') {
      path = `/commercial/${urlPath}`
    }

    return (
      <Container>
        <ProjectHeader>{title}</ProjectHeader>
        <ThreeByTwoGrid>{this.generateSixImgs(project)}</ThreeByTwoGrid>
        <Link to={path}>
          <ViewMoreBtn>view more</ViewMoreBtn>
        </Link>

        {this.state.imgModalClicked && (
          <ImgModal closeBtn={this.handleOverlayClose} />
        )}
      </Container>
    )
  }
}
