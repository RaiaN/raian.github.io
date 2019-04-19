import React from "react"
import { Link } from "gatsby"
import ListLink from "../components/list_link"
import ExternalLink from "../components/external_link"



export default ({ children }) => 
(
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ backgroundImage: `none` }}>
                <h3 style={{ display: 'inline'}}>Peter Leontev </h3>
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