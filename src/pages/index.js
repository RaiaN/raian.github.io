import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

export default () => (
    <Layout>
        <p>My name Is Peter.</p>
        
        <p>
            I am generalist programmer passionated about creating game technologies and improving quality of pipelines. 
            These days I mostly work with Unreal Engine, C++ and Python.
        </p>

        <p>
            You can learn more about me 
            through my <Link style={{color: `#b25b05`}} to="/projects/">projects experience</Link> and <Link style={{color: `#b25b05`}} to="/blog/">technical blog</Link>.
        </p>

        <p>Besides tech I enjoy bouldering, roller skating, watching esport and playing computer games.</p>

        <h4>Contact me:</h4>
        <p 
            style={{
            marginLeft: rhythm(1 / 2),
            }}
        >
            <ul>
                <li>
                    <a style={{color: '#b25b05' }} href="mailto:leontev.petr@gmail.com">Email</a>
                </li>

                <li>
                    <a style={{color: '#b25b05' }} href="https://www.linkedin.com/in/peter-leontev-67b34863/">LinkedIn</a>
                </li>

                <li>
                    <a style={{color: '#b25b05' }} href="https://twitter.com/PeterLeontev">Twitter</a>
                </li>
            </ul>               
        </p>
    </Layout>
)