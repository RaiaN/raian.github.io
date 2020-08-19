import React from "react"
import { Link, graphql } from "gatsby"
import BlogLayout from "../components/blogLayout"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

export default props =>
(
  <Layout>
    <h3 style={{margin: 0, marginBottom: rhythm(2) }}>Blog</h3>
    <BlogLayout location={props.location}>
      <SEO
        title="Blog"
        keywords={[`unreal engine`, `blog`, `developers`]}
      />
      {props.data.allMdx.edges.map(({ node }) => {
        const title = node.frontmatter.title
        return (
          <div key={node.fields.slug} style={{ marginBottom: rhythm(2) }}>
            <h4
              style={{
                  marginBottom: 7,
                  marginTop: 0
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h4>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1/3),
                marginTop: 0,
              }}
            >
              {node.frontmatter.date}
            </p>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description,
                }}
              />
            </div>
          </div>
        )
      })}
    </BlogLayout>
  </Layout>
)


export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`