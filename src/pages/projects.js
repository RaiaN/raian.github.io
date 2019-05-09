import React from "react"
import Layout from "../components/layout"
import ProjectInfo from "../components/projectInfo"
import SEO from "../components/seo"

import procedural_generation_img from "../../content/images/procedural_generation.jpg"
import pw_inventory_img from "../../content/images/postworld_ui.jpg"
import { rhythm } from "../utils/typography";

class ProjectsComponent extends React.Component {
  render() {
    return (
        <Layout>
            <SEO
              title={`Work`}
              keywords={[`projects`, `work`, `unreal engine`]}
            /> 
            <h3 style={{ margin: 0, marginBottom: rhythm(2) }}>Work</h3>
            <ProjectInfo
                image={procedural_generation_img}
                name="Procedural terrain generation via Unreal Engine 4"
                descr="Making procedural terrain is hard. Even harder is to texture it right."
                page="/projects/proceduralGeneration/"
            />
            <ProjectInfo
                image={pw_inventory_img}
                name="POSTWORLD UMG UI"
                descr="POSTWORLD UI built using UMG"
                page="/projects/postworldUI/"
            />
        </Layout>
    )
  }
}

export default ProjectsComponent;