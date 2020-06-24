import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Commercial from './pages/Commercial'
import Residential from './pages/Residential'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <Switch>
          <Route path='/commercial'>
            <Commercial />
          </Route>

          <Route path='/residential'>
            <Residential />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
