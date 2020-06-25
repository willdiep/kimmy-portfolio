import React from 'react'
import styled from 'styled-components'
// import ProjectDetails from './ProjectDetails'
import { withRouter } from 'react-router'

// path - (string) The path pattern used to match. Useful for building nested <Route>s
// url - (string) The matched portion of the URL. Useful for building nested <Link>s

// Consider the route "/users/:userId". match.


const Img = styled.img`
  height: 300px;
`


const ProjectDetails = props => {
  const pathId = props.match.params.id.toLowerCase().split('-').join('')

  let projectDataArray

  for (let key in props.data) {
    const dataId = key.toLowerCase().replace('data', '')
    if (pathId === dataId) {
      projectDataArray = props.data[key]
    }
  }

  const heading = props.match.params.id.replace(/-/g, ' ').split(' ').map( word => word[0].toUpperCase() + word.slice(1, word.length)).join(' ')


  // console.log(projectDataArray)

  // const dataType = projectDataArray[0].type
  
  // let type 

  // if (dataType === 'residential') {
  //   type = 'residential'
  // } else if (dataType === 'commercial') {
  //   type = 'commercial'
  // }


  return (
    <div>
      <h2>{heading}</h2>
      {projectDataArray.map((item) => {
        return <Img src={item.img} alt='' />
      })}
    </div>
  )
}

export default withRouter(ProjectDetails)
