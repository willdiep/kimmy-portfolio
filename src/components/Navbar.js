import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import resumePDF from '../assets/resume.pdf'

const Nav = styled.nav`
  /* background-color: orange; */
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

  a {
    /* color: white; */
  }
`

const LeftNav = styled.div`
  flex-grow: 1;
`

const RightNav = styled.div`
  display: flex;

  div {
    margin-left: 2rem;
  }
`

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <LeftNav>
          <Link to='/'>KIMMY INTERIOR DESIGNER</Link>
        </LeftNav>

        <RightNav>
          <div>
            <Link to='/not-set'>Residential</Link>
          </div>
          <div>
            <Link to='/not-set'>Commercial</Link>
          </div>

          {/* <div>
            <Link to='/about'>About</Link>
          </div> */}

          <div>
            {/* <Link to='/resume'>Resume</Link> */}
            <a href={resumePDF}>Resume</a>
          </div>
        </RightNav>
      </Nav>
    )
  }
}

export default Navbar
