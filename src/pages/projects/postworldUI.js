import React from "react"

import BlogLayout from "../../components/blogLayout"
import Layout from "../../components/layout"

import postworld_ui_img from "../../../content/images/postworld_ui_large.jpg"
import { rhythm } from "../../utils/typography";

import "../../utils/li.css"

class PostworldUIProject extends React.Component {
  render() {
    return (
      <Layout>
          <BlogLayout>
              <div style={{ marginBottom: 0, marginTop: 0 }}>
                  <h3 style={{ marginTop: 0, marginBottom: rhythm(2) }}>Postworld UMG UI</h3>
                  <img style={{ marginTop: 0, marginBottom: 0 }} src={postworld_ui_img} alt=""></img>
              </div>
              <div style={{ marginTop: 0 }}>
                <b>Made using:</b>
              </div>
              <ul style={{ listStylePosition: `inside`, marginLeft: 0 }}>
                  <li>
                      Unreal Engine 4
                  </li>
                  <li>
                      Blueprints
                  </li>
                  <li>
                      UMG
                  </li>
                  <li>
                      Widget pool
                  </li>
            </ul> 
          </BlogLayout>
      </Layout>
    )
  }
}

export default PostworldUIProject;
