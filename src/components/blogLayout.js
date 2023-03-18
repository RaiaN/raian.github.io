import React from "react"

export default class BlogLayout extends React.Component {
  render() {
    const { children } = this.props    

    return (
      <div>
        <main>{children}</main>
      </div>
    )
  }
}
