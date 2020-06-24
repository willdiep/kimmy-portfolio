import React, { Component } from 'react'
import styled from 'styled-components'
import { Project } from './Project'
import * as data from '../data'

const Wrapper = styled.main`
  background-color: lightblue;
`

const Container = styled.div`
  margin: 0 3rem;
  background-color: lightgreen;
`
const ProjectTypeHeader = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 3rem 0;
  background-color: lightgoldenrodyellow;
`

class Gallery extends Component {


  render() {
    return (
      <Wrapper>
        <Container>
          <ProjectTypeHeader>residential</ProjectTypeHeader>

          <Project
            title='Apartment Awe'
            project={data.apartmentaweData}
            category='residential'
          />

          {/* <Project title='Ruthven Townhouse' project={data.ruthvenTownhouseData} /> */}

          <Project
            title='Sunrise City Apartment'
            project={data.sunriseCityApartmentData}
            category='residential'
          />

          <Project
            title='Topaz Caolo Apartment'
            project={data.topazCaoloApartmentData}
            category='residential'
          />

          <Project
            title='Apartment Kitchen Remodel'
            project={data.apartmentKitchenRemodelData}
            category='residential'
          />

          <ProjectTypeHeader>commercial</ProjectTypeHeader>

          <Project
            title='Sweet Delights Cafe'
            project={data.sweetDelightsData}
            category='commercial'
          />
          <Project
            title='Golden Hour Cafe'
            project={data.goldenHourCafeData}
            category='commercial'
          />
          <Project
            title='Serenity Dental'
            project={data.serenityDentalData}
            category='commercial'
          />
        </Container>
      </Wrapper>
    )
  }
}

export default Gallery
