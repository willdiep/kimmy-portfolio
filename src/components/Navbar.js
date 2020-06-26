import React, { Component } from 'react'
import styled from 'styled-components'
import {  Link } from 'react-router-dom'

const Nav = styled.nav`
  /* background-color: orange; */
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

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

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/not-set'>Residential</Link>
          </li>
          <li>
            <Link to='/not-set'>Commercial</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to=''>Resume</Link>
          </li>
        </ul>
      </Nav>
    )
  }
}

export default Navbar
