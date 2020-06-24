import React, { Component } from 'react'

const Container = styled.article`
  display: grid;
  grid-template-columns: 70% 30%;
  background-color: lightcoral;
`

class Project extends Component {
  render() {
    return (
      <>
        <Container></Container>
      </>
    )
  }
}

export default Project
