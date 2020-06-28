import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Home from './pages/Home'
import Gallery from './components/Gallery'

import ProjectDetails from './components/ProjectDetails'
import Footer from './components/Footer'

import * as data from './data'

import './styles/reboot.css'
import styled from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyles'
import './assets/fonts/Josefin_Sans/static/JosefinSans-Thin.ttf'


export const Layout = styled.main`
  /* background-color: lightblue; */
  margin: 0 3rem;
`

function App() {
  console.log('app')
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className='App'>
          <Navbar />

          <Layout>
            <Switch>
              <Route path='/residential/:id'>
                <ProjectDetails data={data} />
              </Route>

              <Route path='/commercial/:id'>
                <ProjectDetails data={data} />
              </Route>

              <Route path='/'>
                <Gallery /> 
                {/* <Home /> Links to <Gallery /> */}
              </Route>
            </Switch>
          </Layout>

          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
