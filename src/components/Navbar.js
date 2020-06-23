import React, { Component } from 'react'
import styled from 'styled-components'


const Nav = styled.nav`
  background-color: orange;
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
`


class Navbar extends Component {
  render() {
    return (
        <Nav>
          <ul>
            <li>Commercial</li>
            <li>Residential</li>
            <li>About</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </Nav>
    )
  }
}

export default Navbar
