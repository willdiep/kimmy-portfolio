import React, { Component } from 'react'
import styled from 'styled-components'
import { Project } from './Project'
import * as data from '../data'

const ProjectTypeHeader = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 3rem 0;
  background-color: lightgoldenrodyellow;
`

class Gallery extends Component {
  render() {
    return (
      <>
        <ProjectTypeHeader>residential</ProjectTypeHeader>

        <Project
          title='Apartment Awe'
          project={data.apartmentAweData}
          category='residential'
          id='apartment-awe'
          type={data.apartmentAweData[0].type}
        />

        {/* <Project title='Ruthven Townhouse' project={data.ruthvenTownhouseData} /> */}

        <Project
          title='Sunrise City Apartment'
          project={data.sunriseCityApartmentData}
          category='residential'
          id='sunrise-city-apartment'
          type={data.sunriseCityApartmentData[0].type}
        />

        <Project
          title='Topaz Caolo Apartment'
          project={data.topazCaoloApartmentData}
          category='residential'
          id='topaz-caolo-apartment'
          type={data.topazCaoloApartmentData[0].type}
        />

        <Project
          title='Apartment Kitchen Remodel'
          project={data.apartmentKitchenRemodelData}
          category='residential'
          id='apartment-kitchen-remodel'
          type={data.apartmentKitchenRemodelData[0].type}
        />

        <ProjectTypeHeader>commercial</ProjectTypeHeader>

        <Project
          title='Sweet Delights Cafe'
          project={data.sweetDelightsCafeData}
          category='commercial'
          id='sweet-delights-cafe'
          type={data.sweetDelightsCafeData[0].type}
        />
        <Project
          title='Golden Hour Cafe'
          project={data.goldenHourCafeData}
          category='commercial'
          id='golden-hour-cafe'
          type={data.goldenHourCafeData[0].type}
        />
        <Project
          title='Serenity Dental'
          project={data.serenityDentalData}
          category='commercial'
          id='serenity-dental'
          type={data.serenityDentalData[0].type}
        />
      </>
    )
  }
}

export default Gallery
