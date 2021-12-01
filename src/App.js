import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/reboot.css'
import styled from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyles'
import './assets/fonts/Josefin_Sans/static/JosefinSans-Thin.ttf'
import Home from './pages/Home'
import ProfessionalPractice from './pages/ProfessionalPractice'
import ProjectDetails from './components/ProjectDetails'
import Footer from './components/Footer'
import data from './data.json'

export const Layout = styled.main`
  margin: 0 3rem;
`

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <div className='App'>
            <Layout>
              <Switch>
                <Route path='/professional-practice'>
                  <ProfessionalPractice />
                </Route>

                <Route path='/residential/:id'>
                  <ProjectDetails data={data} />
                </Route>

                <Route path='/commercial/:id'>
                  <ProjectDetails data={data} />
                </Route>

                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </Layout>

            <Footer />
          </div>
        </Router>
      </>
    )
  }
}

export default App
