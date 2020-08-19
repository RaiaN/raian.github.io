import React from "react"
import { Link, graphql } from "gatsby"

import BlogLayout from "../components/blogLayout"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm, scale } from "../utils/typography"
import { DiscussionEmbed } from "disqus-react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import { createGlobalStyle } from 'styled-components';

import 'prismjs/themes/prism-coy.css';

const GlobalStyle = createGlobalStyle`
  ${() => {
    /* Override PrismJS Defaults */ return null;
  }}  
  
  pre code {
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent;
  }
  
  .highlight pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
  }
  
  pre {
    margin-top: -15px;
    margin-bottom: 5px;
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
  }
  
  pre code, pre tt {
    background-color: transparent;
    border: none;
  }

`;


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const disqusConfig = 
    {
      shortname: this.props.data.site.siteMetadata.disqusID,
      config: { identifier: post.frontmatter.title, siteTitle },
    }

    return (
      <Layout>
        <Link to="/">
          <h3 style={{margin: 0, marginBottom: rhythm(2) }}>Blog</h3>
        </Link>
        <BlogLayout location={this.props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            keywords={[`blog`, `unreal engine`]}
          />
          <h4
              style={{
                  marginBottom: 7,
                  marginTop: 0
              }}
          >
            <i>{post.frontmatter.title}</i>
          </h4>
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

          <GlobalStyle />

          <MDXRenderer>
            {post.body}
          </MDXRenderer>
          
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

export const blogPostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        author,
        title,
        disqusID
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
