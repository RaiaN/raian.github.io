import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import BlogLayout from "../components/blogLayout"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { rhythm, scale } from "../utils/typography"
import { DiscussionEmbed } from "disqus-react"

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

export default function BlogPostTemplate({ location, data, pageContext, children }) {
  const siteTitle = data.site.siteMetadata.title;

  const { previous, next } = pageContext;
  const post = data.mdx;

  // console.log(previous);

  const disqusConfig = 
  {
    shortname: data.site.siteMetadata.disqusID,
    config: { identifier: post.frontmatter.title, siteTitle },
  }

  return (
    <Layout>
      <Link to="/">
      <h3 style={{margin: 0, marginBottom: rhythm(2) }}>Blog</h3>
      </Link>
      <BlogLayout location={location} title={siteTitle}>
        <Seo
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

        <MDXProvider>
          {children}
        </MDXProvider>
        
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
                <Link to={previous.frontmatter.slug} rel="prev">
                  ← <i>{previous.frontmatter.title}</i>
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.frontmatter.slug} rel="next">
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

export const blogPostQuery = graphql`
  query BlogPostBySlug($id: String) {
    site {
      siteMetadata {
        author,
        title,
        disqusID
      }
    }
    mdx(id: {eq: $id}) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      internal {
        contentFilePath
      }
    }
  }
`