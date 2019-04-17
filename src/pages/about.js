import React from "react"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

export default () => (
  <Layout>
      <p>My name Is Peter.</p>
      
      <p>I am generalist programmer passionated about creating game technologies and improving quality of pipelines.</p>

      <p>I am mostly experienced with Unreal Engine, C++ and Python.</p>

      <p>Besides tech I enjoy bouldering, roller skating, watching esport and playing computer games.</p>

      <h4>Contact me:</h4>
      <p 
        style={{
          marginLeft: rhythm(1 / 2),
        }}
      >
          <ul>
            <li>
              <a href="mailto:leontev.petr@gmail.com">Email</a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/peter-leontev-67b34863/">LinkedIn</a>
            </li>

            <li>
              <a href="https://twitter.com/PeterLeontev">Twitter</a>
            </li>
          </ul>          
      </p>
  </Layout>
)