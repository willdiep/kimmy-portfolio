import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const FooterStyle = styled.footer`
    /* background-color: orange; */
    margin: 4rem 3rem 0 3rem;
    /* padding: 0 3rem; */
    height: 75px;
    line-height: 75px;

  `

  return <FooterStyle>Kimmy Nguyen - Interior Designer &copy; 2020</FooterStyle>
}

export default Footer
