import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import ImgModal from './ImgModal'
// import Overview from './Overview'

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

class ProjectDetails extends Component {
  state = {
    imgModalClicked: false,
    imgId: 0,
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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

  render() {
    const pathId = this.props.match.params.id.toLowerCase().split('-').join('')
    // console.log(pathId)

    // console.log(this.data)

    // console.log(this.props.data) // apartmentAweData: {}
    let projectDataArray = []

    let year = ''
    let description = ''

    let projectData = []

    for (let key in this.props.data) {
      // console.log(key) // apartmentAweData
      const dataId = key.toLowerCase().replace('data', '')
      // console.log(dataId) // apartmentawe
      if (pathId === dataId) {
        // console.log(this.props.data[key].imgCollection)
        projectDataArray = this.props.data[key].imgCollection
        projectData = this.props.data[key]
        // console.log(projectDataArray)

        year = this.props.data[key].year
        description = this.props.data[key].description
      }
    }

    // console.log(projectData)

    const heading = this.props.match.params.id
      .replace(/-/g, ' ')
      .split(' ')
      .map((word) => word.toUpperCase())
      .join(' ')

    return (
      <>
        <Container>
          <ImgSection>
            {projectDataArray.slice(1, projectDataArray.length).map((item) => {
              return (
                <Figure onClick={() => this.handleImgId(item.id)}>
                  <Img src={item.img} alt='' />
                  <OverlayContainer onClick={() => this.hanndleOverlayClick()}>
                    <FontAwesomeIcon
                      icon={faSearchPlus}
                      color='white'
                      size='3x'
                    />
                  </OverlayContainer>
                </Figure>
              )
            })}
          </ImgSection>

          <DetailSection>
            <div>
              <h2>{heading}</h2>

              <br></br>

              <DescriptionText>
                {year} | {description}
              </DescriptionText>
            </div>
          </DetailSection>

          {this.state.imgModalClicked && (
            <ImgModal
              imgId={this.state.imgId}
              projectData={projectData}
              closeBtn={this.handleOverlayClose}
              escKeyDown={this.handlEscKeyDown}
            />
          )}
        </Container>

        {/* <Overview /> */}
      </>
    )
  }
}

export default withRouter(ProjectDetails)
