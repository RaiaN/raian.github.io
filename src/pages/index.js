import React from "react"
import { Link, graphql } from "gatsby"
import BlogLayout from "../components/blogLayout"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const IndexPage = ({ location, data }) => {
  return (
    <Layout>
      <h3 style={{margin: 0, marginBottom: rhythm(2) }}>Blog</h3>
      <BlogLayout location={location}>
        <SEO
          title="Blog"
          keywords={[`unreal engine`, `blog`, `developers`, `rendering`, `aws`, `tech leadership`]}
        />
        {
          data.allMdx.nodes.map((node) => (
            <div key={node.frontmatter.slug} style={{ marginBottom: rhythm(2) }}>
              <h4
                style={{
                    marginBottom: 7,
                    marginTop: 0
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.frontmatter.slug}>
                  {node.frontmatter.title}
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
          ))
        }
      </BlogLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        excerpt
        frontmatter {
          slug
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

export const Head = () => <SEO title="Unreal Blog Posts" />

export default IndexPage