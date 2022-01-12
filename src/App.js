import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyles'
import 'styles/reboot.css'
import 'assets/fonts/Josefin_Sans/static/JosefinSans-Thin.ttf'
import data from 'data.json'

// import ProfessionalPractice from './pages/ProfessionalPractice'
// import ProjectDetails from './components/ProjectDetails'
import Home from 'modules/home/components'
import Footer from 'modules/footer/components'
import Commercial from 'modules/commercial/components'
import Residential from 'modules/residential/components'
import CadDrafts from 'modules/caddrafts/components'

import Navbar from 'modules/navbar/components/Navbar'

export const Layout = styled.main`
  margin: 0 20px;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className='App'>
          <Navbar />
          <Layout>
            <Switch>
             <Route path='/residential'>
                <Residential data={data} />
              </Route>

              <Route path='/commercial'>
                <Commercial data={data} />
              </Route>

              <Route path='/cad-drafts'>
                <CadDrafts data={data} />
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

export default App
