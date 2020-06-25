import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProjectDetails from './components/ProjectDetails'
import Footer from './components/Footer'
import * as data from './data'
import styled from 'styled-components'

export const Layout = styled.main`
  background-color: lightblue;
  margin: 0 3rem;
`

function App() {
  return (
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
        </Layout>

        <Footer />
      </div>
    </Router>
  )
}

export default App
