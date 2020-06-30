import React, { Component } from 'react'

// import LazyLoad from 'react-lazyload'
import styled from 'styled-components'
import { Project } from './Project'
import * as data from '../data'

const ProjectTypeHeader = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 1rem 0;
  /* background-color: orange; */
  margin-top: ${(props) => props.commercial && '5rem'};
`

// console.log('gallery component')

class Gallery extends Component {
  render() {
    // console.log('render gallery')
    return (
      <>
        <ProjectTypeHeader>residential</ProjectTypeHeader>

        <Project projectData={data.apartmentAweData} />

        {/* <LazyLoad height={200} offset={100} once > */}
        <Project projectData={data.sunriseCityApartmentData} />
        {/* </LazyLoad> */}

        {/* <LazyLoad height={200} offset={100} once > */}
        <Project projectData={data.topazCaoloApartmentData} />
        {/* </LazyLoad> */}

        {/* <LazyLoad height={200} offset={100} once > */}
        <Project projectData={data.apartmentKitchenRemodelData} />
        {/* </LazyLoad> */}

        <ProjectTypeHeader commercial>commercial</ProjectTypeHeader>

        {/* <LazyLoad height={200} offset={100} once > */}
        <Project projectData={data.sweetDelightsCafeData} />
        {/* </LazyLoad> */}

        {/* <LazyLoad height={200} offset={100} once > */}
        <Project projectData={data.goldenHourCafeData} />
        {/* </LazyLoad> */}

        {/* <LazyLoad height={200} offset={100} once > */}
        <Project projectData={data.serenityDentalData} />
        {/* </LazyLoad> */}
      </>
    )
  }
}

export default Gallery
