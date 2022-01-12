import styled from 'styled-components'
import minWidth from 'styles/mixins'

export const Wrap = styled.div`
margin: 0 auto;
max-width: 1600px;
`

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  
  ${minWidth.tabletLandscape`
    display: flex;
    margin: 0 -5px;
  `}
`

export const ImageWrap = styled.div`
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  img {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

export const Overlay = styled.div`
  background-color: rgba(13,14,15,0.2);
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`
export const Text = styled.h3`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  /* font-family: brandongrotesquemedium; */
`

export const Item = styled.li`
  position: relative;
  flex: 1 1 50%;
  margin: 0 5px;

  &:hover ${Overlay} {
    background-color: rgba(55, 59, 64, 0.5);
    transition: background-color 350ms ease;
  }
`
