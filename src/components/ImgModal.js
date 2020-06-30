import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Container = styled.article`
  background-color: var(--body-color);
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 2rem 3rem;
`

const Topbar = styled.section`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
`

const ImgContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90%;

  .fa-icon:hover {
    color: darkgray;
  }
`

const Img = styled.img`
  /* width: 800px; */
  height: 100%;
`

class ImgModal extends Component {
  state = {
    cursor: 0,
    imgCollection: [],
  }

  componentDidMount() {
    const { imgId, projectData } = this.props

    // console.log(imgId)
    // console.log(projectData)

    this.setState({
      cursor: imgId,
      imgCollection: projectData.imgCollection,
    })

    window.addEventListener('keydown', (e) => {
      // console.log(e.keyCode)
      if (e.keyCode === 27) {
        this.props.escKeyDown()
      }

      this.handleImgNavigate(e)
    })
  }

  handleImgNavigate = (e) => {
    const { cursor, imgCollection } = this.state
    // arrow right/left button should select next/previous list element
    if (e.keyCode === 37 && cursor > 1) {
      this.setState(
        (prevState) => ({
          cursor: prevState.cursor - 1,
        })
        // console.log('prev, this.state.cursor: ', this.state.cursor)
      )
    } else if (e.keyCode === 39 && cursor < imgCollection.length) {
      this.setState(
        (prevState) => ({
          cursor: prevState.cursor + 1,
        })
        // console.log('next, this.state.cursor: ', this.state.cursor)
      )
    }
  }

  handleClickArrowLeft = () => {
    const { cursor } = this.state

    if (cursor > 1) {
      this.setState((prevState) => ({
        cursor: prevState.cursor - 1,
      }))
    }
  }

  handleClickArrowRight = () => {
    const { cursor, imgCollection } = this.state

    if (cursor < imgCollection.length) {
      this.setState(
        (prevState) => ({
          cursor: prevState.cursor + 1,
        })
        // console.log('next, this.state.cursor: ', this.state.cursor)
      )
    }
  }

  render() {
    const clickedImgObj = this.state.imgCollection.find(
      (item) => item.id === this.state.cursor
    )

    // console.log(clickedImgObj)

    let renderImg
    let renderId

    // INITIAL RENDER OF 0
    // if (this.state.cursor > 0) {
    //   console.log(this.state.cursor)

    // }

    // INITIAL RENDER OF 'UNDEFINED'
    if (clickedImgObj) {
      // console.log(clickedImgObj)
      renderId = clickedImgObj.id
      renderImg = clickedImgObj.img
    }

    return (
      <Container>
        <Topbar>
          <div>
            {renderId} / {this.state.imgCollection.length}
          </div>
          <div onClick={() => this.props.closeBtn()}>X</div>
        </Topbar>

        <br></br>

        <ImgContainer>
          <FontAwesomeIcon
            className='fa-icon'
            icon={faAngleLeft}
            size='4x'
            onClick={() => this.handleClickArrowLeft()}
          />
          <Img src={renderImg} alt='' />
          <FontAwesomeIcon
            className='fa-icon'
            icon={faAngleRight}
            size='4x'
            onClick={() => this.handleClickArrowRight()}
          />
        </ImgContainer>
      </Container>
    )
  }
}

export default ImgModal
