import React from "react"

import { rhythm } from "../utils/typography"

class BlogLayout extends React.Component {
  render() {
    const { children } = this.props    

    return (
      <div>
        <main>{children}</main>
        <footer>
           
        </footer>
      </div>
    )
  }
}

export default BlogLayout
