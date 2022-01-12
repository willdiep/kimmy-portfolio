import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import ImgModal from '../../../components/ImgModal'

const Container = styled.article``

const ThreeByTwoGrid = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 1rem;
  margin-bottom: 1rem;
`

const ProjectHeader = styled.h3`
  /* background-color: red; */
  text-transform: uppercase;
  padding: 3rem 0 1rem 0;
  /* margin-top: 2rem; */
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

const ViewMoreBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ViewMoreBtn = styled.div`
  text-transform: uppercase;
  /*  transition: all 0.2s; */
  width: 9rem;
  border: 2px var(--main-text-color) solid;
  text-align: center;
  padding: 0.75rem 0;

  &:hover {
    background-color: var(--main-text-color);
    color: white;
  }
`

export class Project extends Component {
  state = {
    imgModalClicked: false,
    imgId: 0,
  }

  hanndleOverlayClick = () => {
    this.setState(
      {
        imgModalClicked: true,
      }
      // console.log('img clicked')
    )
  }

  handleOverlayClose = () => {
    this.setState(
      {
        imgModalClicked: false,
      }
      // console.log('X clicked')
    )
  }

  handlEscKeyDown = () => {
    this.setState(
      {
        imgModalClicked: false,
      }
      // console.log('escape key down')
    )
  }

  handleImgId = (id) => {
    // console.log(id)
    this.setState({
      imgId: id,
    })
  }

  generateSixImgs = (data) => {
    const mapSixImgs = data.imgCollection.slice(0, 6).map((item) => {
      // console.log(item)
      return (
        <Figure onClick={() => this.handleImgId(item.id)}>
          <Img key={item.id} src={item.img} alt='' />
          <OverlayContainer onClick={() => this.hanndleOverlayClick()}>
            <FontAwesomeIcon icon={faSearchPlus} color='white' size='3x' />
          </OverlayContainer>
        </Figure>
      )
    })
    return mapSixImgs
  }

  render() {
    const { projectData } = this.props

    // console.log('project')

    let path = ''
    if (projectData.category === 'residential') {
      path = `/residential/${projectData.urlPath}`
    } else if (projectData.category === 'commercial') {
      path = `/commercial/${projectData.urlPath}`
    }

    return (
      <Container>
        <ProjectHeader>{projectData.title}</ProjectHeader>
        <ThreeByTwoGrid>{this.generateSixImgs(projectData)}</ThreeByTwoGrid>
        <ViewMoreBtnContainer>
          <Link to={path}>
            <ViewMoreBtn>view more</ViewMoreBtn>
          </Link>
        </ViewMoreBtnContainer>

        {this.state.imgModalClicked && (
          <ImgModal
            imgId={this.state.imgId}
            projectData={projectData}
            closeBtn={this.handleOverlayClose}
            escKeyDown={this.handlEscKeyDown}
          />
        )}
      </Container>
    )
  }
}
