import React from "react"

class BlogLayout extends React.Component {
  render() {
    const { children } = this.props    

    return (
      <div>
        <main>{children}</main>
      </div>
    )
  }
}

export default BlogLayout
