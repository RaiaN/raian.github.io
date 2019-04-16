import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link> 
    </li>
)

export default ({ children }) => (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                <h3 style={{ display: `inline` }}>Peter Works</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/projects/">Projects</ListLink>
                <ListLink to="/blog/">Blog</ListLink>
                <ListLink to="https://google.ru">CV</ListLink>
            </ul>
        </header>
        {children}
    </div>
)