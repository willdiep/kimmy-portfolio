import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const FooterStyle = styled.footer`
    background-color: orange;
    margin: 0 3rem;
    /* padding: 0 3rem; */
    height: 50px;
    line-height: 50px;

  `

  return <FooterStyle>Kimmy Nguyen &copy; 2020</FooterStyle>
}

export default Footer
