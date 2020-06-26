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

class ImgModal extends Component {
    
    render() {

    return (
      <Container>
        
      ImgModal
      <div onClick={() => this.props.closeBtn()}>X</div>
      </Container>
    )
  }
}

export default ImgModal