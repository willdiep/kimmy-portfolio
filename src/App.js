import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProjectDetails from './components/ProjectDetails'
import * as data from './data'
import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: lightblue;
`

export const Container = styled.div`
  margin: 0 3rem;
  background-color: lightgreen;
`

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <Wrapper>
          <Container>
            <Switch>
              <Route path='/residential/:id'>
                <ProjectDetails data={data} />
              </Route>

              <Route path='/commercial/:id'>
                <ProjectDetails data={data} />
              </Route>

              <Route path='/about'>
                <About />
              </Route>

              <Route path='/contact'>
                <Contact />
              </Route>

              <Route path='/'>
                <Home /> {/* Links to <Gallery /> */}
              </Route>
            </Switch>
          </Container>
        </Wrapper>
      </div>
    </Router>
  )
}

export default App
