import React from "react"
import Layout from "../components/layout"
import ProjectInfo from "../components/projectInfo"

import project_1_image_url from "../../content/images/1.jpeg"
import project_2_image_url from "../../content/images/2.jpeg"


class ProjectsComponent extends React.Component {
  render() {
    return (
        <Layout>
            <ProjectInfo image_url={project_1_image_url} description="Project 1 name and de Project 1 name and descriptionect 1 name and descr 1 1 Projiption 1 Project 1 name and  1Project 1 name and descripscription tiondescription 1 Project 1 name and description 1"/>
            <ProjectInfo image_url={project_2_image_url} description="Project 2 name and description 2 maybe"/>
            <ProjectInfo image_url={project_1_image_url} description="Project 3 and no description"/>
        </Layout>
    )
  }
}

export default ProjectsComponent;