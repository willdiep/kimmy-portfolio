import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import businessPlanPdf from '../assets/business-plan-assignment.pdf'
import mailerImg from '../assets/mailer.jpg'
import businessFormationPdf from '../assets/business-formation-assignment.pdf'
import letterOfAgreementPdf from '../assets/letter-of-agreement-assignment.pdf'
import targetMarketAnalysisPdf from '../assets/target-market-analysis-assignment.pdf'

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
  font-size: 1.17em;
  text-decoration: underline;
  margin-bottom: 1rem;
  display: block;
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

          <AnchorLink href={letterOfAgreementPdf}>
            Letter of Agreement
          </AnchorLink>

          <AnchorLink href={businessFormationPdf}>
            Business Formation
          </AnchorLink>

          <AnchorLink href={businessPlanPdf}>Business Plan</AnchorLink>

          <AnchorLink href={targetMarketAnalysisPdf}>
            Target Market Analysis
          </AnchorLink>

          <AnchorLink href={mailerImg}>Marketing Mailer</AnchorLink>
        </Container>
      </>
    )
  }
}

export default ProfessionalPractice
