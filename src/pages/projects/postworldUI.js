import React from "react"

import BlogLayout from "../../components/blogLayout"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import postworld_ui_img from "../../../content/images/postworld_ui_large.jpg"
import { rhythm } from "../../utils/typography";

import "../../utils/li.css"


class PostworldUIProject extends React.Component {
  render() {
    return (
      <Layout>
          <SEO
              title={`POSTWORLD UI`}
              keywords={[`unreal engine`, `UMG`, `UI`]}
          />
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
                    <a style={{color: '#b25b05' }} href="https://www.unrealengine.com/">Unreal Engine 4 C++ and Blueprints</a>
                  </li>
                  <li>
                    <a style={{color: '#b25b05' }} href="https://en.wikipedia.org/wiki/Pool_(computer_science)">Widget pool</a>
                  </li>
            </ul> 
          </BlogLayout>
      </Layout>
    )
  }
}

export default PostworldUIProject;
