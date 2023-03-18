import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

import "../utils/li.css"

export default () => (
    <Layout>
        <h3 style={{margin: 0, marginBottom: rhythm(1.8) }}>About</h3>
        <p>
        I work with startups to create Streaming technologies, Visualization platforms and Cloud Rendering pipelines.
        Current stack: Unreal Engine 4/5, C++, C#, Python, Node.js, AWS. 
        Feel free to contact me here: https://calendly.com/petr-leontev/30min
        </p>
        <p>
            I write about technical stuff <Link style={{color: `#b25b05`}} to="/">here</Link>.
        </p>
        <p>Besides tech I enjoy travelling, hiking, bouldering, roller skating, watching esport and playing computer games.</p>
        <b>Contacts:</b>
        <div>
            <ul style={{ listStylePosition: `inside` }}>
                <li>
                    leontev dot petr at gmail dot com
                </li>
                <li>
                    <a style={{color: '#b25b05' }} href="https://www.linkedin.com/in/petr-leontev">LinkedIn</a>
                </li>
                <li>
                    <a style={{color: '#b25b05' }} href="https://twitter.com/PetrLeontev">Twitter</a>
                </li>
                <li>
                    <a style={{color: '#b25b05' }} href="https://github.com/RaiaN">Github</a>
                </li>
            </ul> 
        </div>        
    </Layout>
)