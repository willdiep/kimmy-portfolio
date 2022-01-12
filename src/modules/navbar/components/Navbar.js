import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/logo.png'
// import resumePDF from '../../assets/resume-july2021.pdf'
import { Nav, LeftNav, RightNav, LogoImg } from './Navbar.styled.js'

class Navbar extends Component {
  render() {
    let rightNav

    rightNav = (
      <RightNav>
        <div>
          <Link to='/residential'>Residential</Link>
        </div>

        <div>
          <Link to='/commercial'>Commercial</Link>
        </div>

        <div>
          <Link to='/cad-drafts'>CAD Drafts</Link>
        </div>

        <div>
          {/* <Link to='/resume'>Resume</Link> */}
          {/* <a href={resumePDF}>Resume</a> */}
        </div>
      </RightNav>
    )

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
