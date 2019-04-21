import React from "react"

import BlogLayout from "../../components/blogLayout"
import Layout from "../../components/layout"

import procedural_generation_img from "../../../content/images/procedural_generation_large.jpg"

class PostworldUIProject extends React.Component {
  render() {
    return (
      <Layout>
          <BlogLayout>
              <div style={{marginBottom: 0, marginTop: 0}}>
                  <h3 style={{marginTop: 0, marginBottom: 16}}>Procedural terrain generation</h3>
                  <img style={{marginTop: 0, marginBottom: 0}} src={procedural_generation_img}></img>
              </div>
              <div style={{marginTop: 0}}>
                <b>Made using:</b>
              </div>
              <ul style={{ listStylePosition: `inside`, marginLeft: 0  }}>
                <li>
                  <a style={{color: '#b25b05' }} href="https://www.unrealengine.com/">Unreal Engine 4 C++ and Blueprints</a>
                </li>
                <li>
                  <a style={{color: '#b25b05' }} href="http://libnoise.sourceforge.net/">libnoise</a>
                </li>
                <li>
                  <a style={{color: '#b25b05' }} href="https://www.unrealengine.com/marketplace/en-US/slug/runtime-mesh-component">Runtime Mesh Component</a>
                </li>
              </ul> 
          </BlogLayout>
      </Layout>
    )
  }
}

export default PostworldUIProject;
