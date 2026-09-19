import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { rhythm, scale } from "../utils/typography"

// Posts are grouped by their `category` frontmatter; untagged posts fall into "3d".
const sections = [
  {
    category: "ai",
    title: "Now: AI & Film Making",
    intro: "What I'm working on today and where I'm heading - applied AI, agent harnesses and AI-driven creative production.",
  },
  {
    category: "3d",
    title: "Before: 3D & Unreal Engine",
    intro: "Years of real-time 3D work - Unreal Engine internals, video encoding and playback, performance tuning.",
  },
]

const PostPreview = ({ node }) => (
  <article style={{ marginBottom: rhythm(2) }}>
    <h4 style={{ marginBottom: 7, marginTop: 0 }}>
      <Link style={{ boxShadow: 'none' }} to={node.frontmatter.slug}>
        {node.frontmatter.title}
      </Link>
    </h4>
    <p
      style={{
        ...scale(-1 / 5),
        display: 'block',
        marginBottom: rhythm(1 / 3),
        marginTop: 0,
        color: '#888',
      }}
    >
      {node.frontmatter.date}
    </p>
    <p
      dangerouslySetInnerHTML={{
        __html: node.frontmatter.description,
      }}
    />
  </article>
)

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <h2 style={{ marginBottom: rhythm(0.5) }}>Blog</h2>
      <p style={{ color: '#666', marginBottom: rhythm(2) }}>
        Deep technical writing on systems I've built - from low-level engine internals to cloud-scale pipelines.
      </p>
      {sections.map((section) => {
        const sectionPosts = posts.filter(
          (node) => (node.frontmatter.category || "3d") === section.category
        )
        if (sectionPosts.length === 0) return null

        return (
          <section key={section.category} style={{ marginBottom: rhythm(2) }}>
            <h3 style={{ color: '#d35400', marginTop: 0, marginBottom: rhythm(0.25) }}>
              {section.title}
            </h3>
            <p style={{ color: '#666', marginBottom: rhythm(1.5) }}>{section.intro}</p>
            {sectionPosts.map((node) => (
              <PostPreview key={node.frontmatter.slug} node={node} />
            ))}
          </section>
        )
      })}
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
          category
        }
      }
    }
  }
`

export const Head = () => (
  <Seo
    title="Blog"
    keywords={[
      `technical blog`,
      `solutions architect`,
      `unreal engine`,
      `generative ai`,
      `cloud architecture`,
    ]}
  />
)

export default BlogPage
