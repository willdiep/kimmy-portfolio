import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import resumePDF from '../assets/resume-july2021.pdf'
// import businessPlanPDF from '../assets/business-plan-assignment.pdf'

const Nav = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 3rem;

  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    margin-right: 3.5rem;
  }

  a:hover {
    color: var(--secondary-color);
  }
`

const LeftNav = styled.div`
  flex-grow: 1;
`

const LogoImg = styled.img`
  width: 4rem;
`

const RightNav = styled.div`
  display: flex;

  div {
    margin-left: 2rem;
  }
`

class Navbar extends Component {
  render() {
    let rightNav

    if (
      this.props.scrollToResidential ||
      this.props.scrollToCommercial ||
      this.props.scrollToCadDrafts ||
      this.props.scrollToSchoolProjects
    ) {
      rightNav = (
        <RightNav>
          <div
            onClick={() => {
              this.props.scrollToResidential.current.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            <Link>Residential</Link>
          </div>

          <div
            onClick={() => {
              this.props.scrollToCommercial.current.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            <Link>Commercial</Link>
          </div>

          <div
            onClick={() => {
              this.props.scrollToCadDrafts.current.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            <Link>CAD Drafts</Link>
          </div>

          <div
            onClick={() => {
              this.props.scrollToSchoolProjects.current.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            <Link>School Projects</Link>
          </div>

          <div>
            <Link to='/professional-practice'>Professional Practice</Link>
          </div>

          <div>
            <a href={resumePDF}>About</a>
          </div>
        </RightNav>
      )
    } else {
      rightNav = (
        <RightNav>
          <div>
            <Link to='/'>Residential</Link>
          </div>

          <div>
            <Link to='/'>Commercial</Link>
          </div>

          <div>
            <Link to='/'>CAD Drafts</Link>
          </div>

          <div>
            <Link to='/'>School Projects</Link>
          </div>

          <div>
            {/* <Link to='/resume'>Resume</Link> */}
            <a href={resumePDF}>About</a>
          </div>
        </RightNav>
      )
    }

    return (
      <Nav>
        <LeftNav>
          <Link to='/'>
            <LogoImg src={logo} alt='logo' />
          </Link>
        </LeftNav>

        {rightNav}
      </Nav>
    )
  }
}

export default Navbar
