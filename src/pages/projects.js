import React from "react"
import Layout from "../components/layout"
import ProjectInfo from "../components/projectInfo"

import pw_inventory_img from "../../content/images/pw_inventory.jpg"
import procedural_generation_img from "../../content/images/procedural_generation.jpg"

class ProjectsComponent extends React.Component {
  render() {
    return (
        <Layout>
            <h3 style={{ margin: 0, marginBottom: 16 }}>Projects</h3>
            
            <ProjectInfo
                image={procedural_generation_img}
                name="Procedural terrain generation via Unreal Engine 4"
                descr="Making procedural terrain is hard. Even harder is to texture it right."
                page="/projects/proceduralGeneration/"
            />
            <ProjectInfo
                image={pw_inventory_img}
                name="POSTWORLD UMG UI"
                descr="POSTWORLD is Hardcore Action RPG that has a quite complex UI and here you may learn more about how it was built."
                page="/projects/postworldUI/"
            />
        </Layout>
    )
  }
}

export default ProjectsComponent;