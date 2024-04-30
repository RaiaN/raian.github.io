import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

import "../utils/li.css"

const AboutPage = () => {
    return (
        <Layout>
            <h3 style={{margin: 0, marginBottom: rhythm(1.8) }}>About</h3>
            <p>
            I am working as Solutions Architect with startups to create Realtime Streaming technologies, Visualization platforms and Cloud Rendering pipelines. Transitioning into 3D + ML/AI area.

            </p>
            <p>
                I write about technical stuff <Link style={{color: `#b25b05`}} to="/">here</Link>. Current stack: Unreal Engine 4/5, C++, C#, Python, Node.js, AWS.
            </p>
            <p>Besides tech I enjoy travelling, hiking, bouldering, roller skating, watching esport and playing computer games.</p>
            <b>Contacts:</b>
            <div>
                <ul style={{ listStylePosition: `inside` }}>
                    <li>
                        <a style={{color: '#b25b05' }} href="https://calendly.com/petr-leontev/30min">Calendly</a>
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
                    <li>
                        leontev dot petr at gmail dot com
                    </li>
                </ul> 
            </div>        
        </Layout>
    )
}

export default AboutPage;