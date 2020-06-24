import React from 'react'
// import styled from 'styled-components'
import { useParams } from 'react-router-dom'

// const Container = styled.article`
//   display: grid;
//   grid-template-columns: 70% 30%;
//   background-color: lightcoral;
// `

const ProjectDetails = () => {
  let { topicId } = useParams()
  return (
    <>
      {/* <Container>
          
        </Container> */}
      <h3>Requested topic ID: {topicId}</h3>
    </>
  )
}

export default ProjectDetails
