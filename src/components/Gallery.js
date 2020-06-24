import React, { Component } from 'react'
import styled from 'styled-components'
import { ProjectOverview } from './ProjectOverview'
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

          <ProjectOverview title='Apartment Awe' project={data.apartmentaweData} />
         
          {/* <ProjectOverview title='Ruthven Townhouse' project={data.ruthvenTownhouseData} /> */}
          
          <ProjectOverview title='Sunrise City Apartment' project={data.sunriseCityApartmentData} />
          
          <ProjectOverview title='Topaz Caolo Apartment' project={data.topazCaoloApartmentData} />

          <ProjectOverview title='Apartment Kitchen Remodel' project={data.apartmentKitchenRemodelData} />









          <ProjectTypeHeader>commerical</ProjectTypeHeader>

          <ProjectOverview title='Sweet Delights Cafe' project={data.sweetDelightsData} />
          <ProjectOverview title='Golden Hour Cafe' project={data.goldenHourCafeData} />
          <ProjectOverview title='Serenity Dental' project={data.serenityDentalData} />

        </Container>
      </Wrapper>
    )
  }
}

export default Gallery
