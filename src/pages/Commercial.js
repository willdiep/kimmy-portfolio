import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import ProjectDetails from './ProjectDetails'

function Commercial() {
  let match = useRouteMatch()

  return (
    <div>
      <h2>Commercial</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Commercial page has its own <Switch> with more routes
          that build on the /Commercial URL path. You can think of the
          2nd <Route> here as an "index" page for all Commercial, or
          the page that is shown when no ProjectDetails is selected */}
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

export default Commercial
