import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.article`
  background-color: orange;
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`

const Img = styled.img`
  width: 800px;
`

class ImgModal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      // console.log(e.keyCode)
      if (e.keyCode === 27) {
        this.props.escKeyDown()
      }
    })
  }

  render() {
    const { imgId, projectData } = this.props

    // console.log(imgId)
    const clickedImgObj = projectData.imgCollection.find( item => item.id === imgId)

    const clickedImg = clickedImgObj.img




    return (
      <Container>

        <div onClick={() => this.props.closeBtn()}>X</div>

        <Img src={clickedImg} alt='' />

      </Container>
    )
  }
}

export default ImgModal
