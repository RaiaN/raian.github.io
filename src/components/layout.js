import React from "react"
import { Link } from "gatsby"
import ListLink from "./listLink"
import ExternalLink from "./externalLink"
import "../global.css"



class Layout extends React.Component {
    render() {
        return (
            <div style={{ margin: `3rem auto`, maxWidth: 800}}>
                <header style={{ marginBottom: `1.5rem` }}>
                    <Link to="/" style={{ backgroundImage: `none` }}>
                        <h3 style={{ display: 'inline'}}>Peter Leontev </h3>
                    </Link>
                    <ul style={{ listStyle: `none`, float: `right` }}>
                        <ListLink to="/">About</ListLink>
                        <ListLink to="/projects/">Work</ListLink>
                        <ListLink to="/blog/">Blog</ListLink>
                        <ExternalLink url="http://google.ru" url_name="CV"/>
                    </ul>
                </header>
                {this.props.children}
                <br></br>
            </div>
        )
    }
}

export default Layout;