import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/'>
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
