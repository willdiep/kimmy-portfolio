import React from 'react'
import styled from 'styled-components'



const Figure = styled.figure`
  background-color: yellow;
  display: flex;
`

const Img = styled.img`
  /* height: 80%; */
  width: 100%;
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

const ViewMoreBtn = styled.button`
text-transform: uppercase;


/*  transition: all 0.2s; */
`

export const generateSixImgs = (data) => {
  const mapSixImgs = data.slice(0, 6).map((item) => {
    return (
      <Figure>
        <Img src={item.img} alt='' />
      </Figure>
    )
  })
  return mapSixImgs
}

export const ProjectOverview = ({title, project}) => {
  return (
    <>
      <ProjectHeader>{title}</ProjectHeader>
      <ThreeByTwoGrid>{generateSixImgs(project)}</ThreeByTwoGrid>
      <ViewMoreBtn>view more</ViewMoreBtn>
    </>
  )
}
