import React from "react"
import { Link, graphql } from "gatsby"

import BlogLayout from "../components/blogLayout"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import { DiscussionEmbed } from "disqus-react"






class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const disqusConfig = 
    {
      shortname: `peterleontev`,
      config: { identifier: post.frontmatter.title, siteTitle },
    }

    return (
      <Layout>
        <Link to="/blog/">
          <h3 style={{margin: 0, marginBottom: rhythm(2) }}>Blog</h3>
        </Link>
        <BlogLayout location={this.props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <h4 style={{marginBottom: 0, marginTop: 0}}><i>{post.frontmatter.title}</i></h4>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1/3),
              marginTop: 0,
            }}
          >
            {post.frontmatter.date}
          </p>
          <React.Fragment>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <style jsx>
              {`
                  :global(pre) {
                    background: #dddddd;
                  }
              `}
              </style>
              
          </React.Fragment>
          
          
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />

          <div>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
                marginLeft: 0
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← <i>{previous.frontmatter.title}</i>
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    <i>{next.frontmatter.title}</i> →
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <DiscussionEmbed {...disqusConfig} />

        </BlogLayout>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        author,
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
