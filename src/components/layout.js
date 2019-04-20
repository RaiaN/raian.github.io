import React from "react"
import { Link } from "gatsby"
import ListLink from "./listLink"
import ExternalLink from "./externalLink"


export default ({ children }) => 
(
    <div style={{ margin: `3rem auto`, maxWidth: 800}}>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ backgroundImage: `none` }}>
                <h4 style={{ display: 'inline'}}>Peter Leontev </h4>
            </Link>
            
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/">About</ListLink>
                <ListLink to="/projects/">Projects</ListLink>
                <ListLink to="/blog/">Blog</ListLink>
                <ExternalLink url="http://google.ru" url_name="CV"/>
            </ul>
        </header>
        {children}
    </div>
)