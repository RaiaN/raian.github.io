import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import ProjectInfo from "../components/projectInfo"

class ProjectsComponent extends React.Component {
  render() {
    const projectsInfo = this.props.data.images.edges.map(edge => {
      return {
          "l": edge.node.childImageSharp.fluid.originalImg,
          "s": edge.node.childImageSharp.fixed.src
      }
    })

    console.log(projectsInfo);

    return (
        <Layout>
            <div>
                {projectsInfo.map((projectInfo, index) => <ProjectInfo item={projectInfo}/> )}
            </div>
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