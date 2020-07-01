import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import data from '../data.json'

const ProjectTypeHeader = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 1rem 0;
  /* background-color: orange; */
  margin-top: ${(props) => props.commercial && '5rem'};
`

const GridContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`

// const ProjectHeader = styled.h3`
//   /* background-color: red; */
//   text-transform: uppercase;
//   padding: 3rem 0 1rem 0;
//   /* margin-top: 2rem; */
// `

const Img = styled.img`
  display: block;
  width: 100%;
  /* height: auto; */
  height: 100%;
`

const ProjectTitle = styled.div`
  text-align: center;
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

class Overview extends Component {
  state = {
    imgModalClicked: false,
    imgId: 0,
    objName: '',
    imgUrlPath: null,
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

  handleImgId = (id, objName, imgUrlPath) => {
    // console.log(id)
    // console.log(objName)
    this.setState({
      imgId: id,
      objName,
      imgUrlPath,
    })
  }
  render() {
    let projectArr = []
    let firstProjectImgId
    // let projectUrlPath
    let firstObjName
    let category

    for (let key in data) {
      let imgCollection = data[key].imgCollection
      let title = data[key].title
      let projectUrlPath = data[key].urlPath
      firstObjName = data[key].objName

      let firstProjectImg = imgCollection[0].img
      firstProjectImgId = imgCollection[0].id

      category = data[key].category

      // console.log(projectUrlPath)

      let categoryUrlPath = ''
      if (category === 'residential') {
        categoryUrlPath = `/residential/${projectUrlPath}`
      } else if (category === 'commercial') {
        categoryUrlPath = `/commercial/${projectUrlPath}`
      }

      projectArr.push({
        title: title,
        id: firstProjectImgId,
        img: firstProjectImg,
        objName: firstObjName,
        categoryUrlPath,
        category,
      })
    }

    // console.log(data)
    console.log(projectArr)















    return (
      <>

        <ProjectTypeHeader>residential</ProjectTypeHeader>
        <br></br>

        <GridContainer>
          {projectArr.filter( project => project.category === 'commercial') &&projectArr.map((item) => {
            return (
              <section>
                <Link to={item.categoryUrlPath}>
                  <Figure
                  // onClick={() =>
                  //   this.handleImgId(item.id, item.objName, item.img)
                  // }
                  >
                    <Img key={item.id} src={item.img} alt='' />
                    <OverlayContainer
                      onClick={() => this.hanndleOverlayClick()}
                    >
                      <FontAwesomeIcon
                        icon={faSearchPlus}
                        color='white'
                        size='3x'
                      />
                    </OverlayContainer>
                  </Figure>
                </Link>
                <ProjectTitle>{item.title}</ProjectTitle>
              </section>
            )
          })}
        </GridContainer>

        <ProjectTypeHeader>commercial</ProjectTypeHeader>

        <br></br>
      </>
    )
  }
}

export default Overview
