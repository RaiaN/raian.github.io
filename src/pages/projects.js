import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import PaginatedPageTemplate from "../templates/paginatedPageTemplate"

const path = require(`path`)

class ProjectsComponent extends React.Component {
  render() {
    const projectsInfo = this.props.data.images.edges.map(edge => {
      return {
          "large": edge.node.childImageSharp.fluid.originalImg,
          "small": edge.node.childImageSharp.fixed.src
      }
    })

    const Projects = projectsInfo.map(projectInfo => <PaginatedPageTemplate key={projectInfo.node.id} post={projectInfo.node} />)

    return (
      <Layout>
          {Projects} 
      </Layout>
    )
  }
}

export default ProjectsComponent;

export const projectsComponentQuery = graphql`
  query 
  {
    images: allFile
    (
        filter: 
        {
          extension: {regex: "/(jpeg|jpg|png)/"},
          sourceInstanceName: {eq: "images"}
        }
    ) 
    {
      edges 
      {
        node 
        {
          childImageSharp
          {
            fixed(quality: 95, width: 300, height: 300) 
            {
              src
            }
            fluid 
            {
              originalImg
            }
          }
        }
      }
    }
  } 
`