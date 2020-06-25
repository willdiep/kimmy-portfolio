import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'

const Container = styled.article`
  background-color: lightskyblue;
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
  background-color: green;
  grid-area: main;
`

const DetailSection = styled.aside`
  background-color: lightpink;
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

const ProjectDetails = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const pathId = props.match.params.id.toLowerCase().split('-').join('')

  let projectDataArray

  for (let key in props.data) {
    const dataId = key.toLowerCase().replace('data', '')
    if (pathId === dataId) {
      projectDataArray = props.data[key]
    }
  }

  const heading = props.match.params.id
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
    .join(' ')

  // console.log(projectDataArray)

  // const dataType = projectDataArray[0].type
  // let type
  // if (dataType === 'residential') {
  //   type = 'residential'
  // } else if (dataType === 'commercial') {
  //   type = 'commercial'
  // }

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

            <p>2018 | Realizacja</p>
            <p>
              Współpraca: Dominika Zabłotna-Kowalska, Nina Struzik-Michalczewska
            </p>
            <p>Zdjęcia: Julia Michalczewska</p>
          </div>
        </DetailSection>
      </Container>
    </>
  )
}

export default withRouter(ProjectDetails)
