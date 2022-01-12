import styled from 'styled-components'

export const Nav = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 3rem 25px 3rem;

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

export const LeftNav = styled.div`
  flex-grow: 1;
`

export const LogoImg = styled.img`
  width: 4rem;
`

export const RightNav = styled.div`
  display: flex;

  div {
    margin-left: 2rem;
  }
`