import React from "react"

import { rhythm } from "../utils/typography"

class BlogLayout extends React.Component {
  render() {
    const { children } = this.props    

    return (
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default BlogLayout
