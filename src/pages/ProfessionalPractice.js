import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import businessPlanPDF from '../assets/business-plan-assignment.pdf'

const Container = styled.article`
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 0;
`

const Heading = styled.h3`
  margin-bottom: 5px;
`

const AnchorLink = styled.a`
  color: var(--secondary-color);
  margin-bottom: 1rem;
  display: inline-block;
`

class ProfessionalPractice extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Container>
          <Heading>Reflection</Heading>
          <p>
            For the past 8 weeks, I have learned multiple skills and techniques
            to work as an interior designer, as well as how to run a design
            firm. This is an excellent course so far. I have challenged myself
            and been inspired to create the portfolio and the business plans and
            so much more throughout the course. The transition of each module is
            very logical for the specific learning outcomes and provides precise
            and comprehensive guidelines for assignment requirements. It helped
            me learn how to organize all of my goals and design choices along
            the way. Overall, this course provided a strong foundation for being
            a professional interior designer.
          </p>

          <Heading>Letter of Agreement</Heading>

          <Heading>Business Formation</Heading>

          <Heading>Business Plan</Heading>
          <AnchorLink href={businessPlanPDF}>View Business Plan document</AnchorLink>

          <Heading>Target Market Analysis</Heading>

          <Heading>Marketing Mailer</Heading>
        </Container>
      </>
    )
  }
}

export default ProfessionalPractice
