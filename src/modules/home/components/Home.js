import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from 'data.json'
import { Wrap, List, Item, ImageWrap, Overlay, Text } from 'modules/home/components/Home.styled'

class Home extends Component {
  render() {
    return (
      <>
        <Wrap>
          <List>
            <Item>
              <Link to='/residential'>
                <ImageWrap>
                  <img
                    src={data.pineyPointCustomHome.imgCollection[0].img}
                    alt='residential'
                  />
                </ImageWrap>
                <Overlay>
                  <Text>RESIDENTIAL</Text>
                </Overlay>
              </Link>
            </Item>
            <Item>
              <Link to='/commercial'>
                <ImageWrap>
                  <img
                    src={data.serenityDental.imgCollection[0].img}
                    alt='commercial'
                  />
                </ImageWrap>
                <Overlay>
                  <Text>COMMERCIAL</Text>
                </Overlay>
              </Link>
            </Item>
          </List>
        </Wrap>
      </>
    )
  }
}

export default Home
