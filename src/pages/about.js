import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

import "../utils/li.css"

export default () => (
    <Layout>
        <h3 style={{margin: 0, marginBottom: rhythm(1.8) }}>About</h3>
        <p>
            I am generalist programmer passionated about creating game technologies and improving quality of pipelines. 
            These days I mostly work with Unreal Engine, C++ and Python.
        </p>
        <p>
            You can learn more about me through my <Link style={{color: `#b25b05`}} to="/projects/">work</Link> and <Link style={{color: `#b25b05`}} to="/blog/">technical blog</Link>.
        </p>
        <p>Besides tech I enjoy bouldering, roller skating, watching esport and playing computer games.</p>
        <b>Contacts:</b>
        <div>
            <ul style={{ listStylePosition: `inside` }}>
                <li>
                    leontev.petr at gmail dot com
                </li>
                <li>
                    <a style={{color: '#b25b05' }} href="https://www.linkedin.com/in/peter-leontev-67b34863/">LinkedIn</a>
                </li>
                <li>
                    <a style={{color: '#b25b05' }} href="https://twitter.com/PeterLeontev">Twitter</a>
                </li>
                <li>
                    <a style={{color: '#b25b05' }} href="https://github.com/RaiaN">Github</a>
                </li>
            </ul> 
        </div>        
    </Layout>
)