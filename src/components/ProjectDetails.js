import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'

const Container = styled.article`
  /* background-color: lightskyblue; */
  /* margin: 0 1rem; */
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-areas: 'main sidebar';

  @media (max-width: 768px) {
    display: grid;
    /* grid-template-columns: 1fr; */
    grid-template-areas: 'sidebar' 'main';
  }
`

const ImgSection = styled.section`
  /* background-color: green; */
  grid-area: main;
`

const DetailSection = styled.aside`
  /* background-color: lightpink; */
  margin: 2rem 3rem;
  grid-area: sidebar;

  div {
    position: fixed;
  }
`

const Img = styled.img`
  /* height: 300px; */
  width: 100%;
`

const DescriptionText = styled.p`
  margin-right: 6rem;
`

const ProjectDetails = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const pathId = props.match.params.id.toLowerCase().split('-').join('')
  // console.log(pathId)

  let projectDataArray
  // console.log(projectDataArray)
  // console.log(props.data) // apartmentAweData: {}

  for (let key in props.data) {
    // console.log(key) // apartmentAweData
    const dataId = key.toLowerCase().replace('data', '')
    // console.log(dataId) // apartmentawe
    if (pathId === dataId) {
      // console.log(props.data[key].imgCollection)
      projectDataArray = props.data[key].imgCollection
    }
  }

  const heading = props.match.params.id
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.toUpperCase())
    .join(' ')

  return (
    <>
      <Container>
        <ImgSection>
          {projectDataArray.map((item) => {
            return <Img src={item.img} alt='' />
          })}
        </ImgSection>

        <DetailSection>
          <div>
            <h2>{heading}</h2>

          <br></br>

            <DescriptionText>
              {props.data.apartmentAweData.description}
            </DescriptionText>
          </div>
        </DetailSection>
      </Container>
    </>
  )
}

export default withRouter(ProjectDetails)
