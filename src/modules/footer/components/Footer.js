import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const FooterStyle = styled.footer`
    margin: 4rem 3rem 0 3rem;
    height: 75px;
    line-height: 75px;
  `

  return <FooterStyle>Kimmy Nguyen - Interior Designer &copy; {new Date().getFullYear()}</FooterStyle>
}

export default Footer
