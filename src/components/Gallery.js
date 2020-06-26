import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'
import { Project } from './Project'
import * as data from '../data'

const ProjectTypeHeader = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 3rem 0;
  /* background-color: lightgoldenrodyellow; */
  padding-top: ${props => (props.commercial && '7rem' )};
`

class Gallery extends Component {
  render() {
    return (
      <>
        <ProjectTypeHeader>residential</ProjectTypeHeader>

        <Project
          title={data.apartmentAweData.title}
          project={data.apartmentAweData}
          category={data.apartmentAweData.category}
          urlPath={data.apartmentAweData.urlPath}
        />



        {/* <LazyLoad height={200} offset={100} once >
          <Project
            title='Sunrise City Apartment'
            project={data.sunriseCityApartmentData}
            category='residential'
            urlPath='sunrise-city-apartment'
            // type={data.sunriseCityApartmentData[0].type}
          />
        </LazyLoad>
        <LazyLoad height={200} offset={100} once >
          <Project
            title='Topaz Caolo Apartment'
            project={data.topazCaoloApartmentData}
            category='residential'
            urlPath='topaz-caolo-apartment'
            // type={data.topazCaoloApartmentData[0].type}
          />
        </LazyLoad>
        <LazyLoad height={200} offset={100} once >
          <Project
            title='Apartment Kitchen Remodel'
            project={data.apartmentKitchenRemodelData}
            category='residential'
            urlPath='apartment-kitchen-remodel'
            // type={data.apartmentKitchenRemodelData[0].type}
          />
        </LazyLoad>


        <ProjectTypeHeader commercial>commercial</ProjectTypeHeader>

        <LazyLoad height={200} offset={100} once >
          <Project
            title='Sweet Delights Cafe'
            project={data.sweetDelightsCafeData}
            category='commercial'
            urlPath='sweet-delights-cafe'
            // type={data.sweetDelightsCafeData[0].type}
          />
        </LazyLoad>
        <LazyLoad height={200} offset={100} once >
          <Project
            title='Golden Hour Cafe'
            project={data.goldenHourCafeData}
            category='commercial'
            urlPath='golden-hour-cafe'
            // type={data.goldenHourCafeData[0].type}
          />
        </LazyLoad>

        <LazyLoad height={200} offset={100} once >
          <Project
            title='Serenity Dental'
            project={data.serenityDentalData}
            category='commercial'
            urlPath='serenity-dental'
            // type={data.serenityDentalData[0].type}
          />
        </LazyLoad> */}
      </>
    )
  }
}

export default Gallery
