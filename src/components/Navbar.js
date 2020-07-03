import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
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
    return (
      <Nav>
        <LeftNav>
          <Link to='/'>
            <LogoImg src={logo} alt='logo' />
          </Link>
        </LeftNav>

        <RightNav>
          <div onClick={() => {
              // console.log(this.props.scroll)
              this.props.scrollToResidential.current.scrollIntoView({ behavior: 'smooth' })
            }}>
            <Link>Residential</Link>
          </div>

          <div
            onClick={() => {
              // console.log(this.props.scroll)
              this.props.scrollToCommercial.current.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <Link>Commercial</Link>
          </div>

          <div
            onClick={() => {
              // console.log(this.props.scroll)
              this.props.scrollToCadDrafts.current.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <Link>CAD Drafts</Link>
          </div>



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
