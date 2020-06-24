import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import ProjectDetails from './ProjectDetails'

function Residential() {
  let match = useRouteMatch()

  return (
    <div>
      <h2>Residential</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Residential page has its own <Switch> with more routes
          that build on the /Residential URL path. You can think of the
          2nd <Route> here as an "index" page for all Residential, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <ProjectDetails />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}

export default Residential
