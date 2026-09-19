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
  const [active, setActive] = React.useState(sections[0].category)

  // Let /blog#3d or /blog#ai open a specific tab.
  React.useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (sections.some((s) => s.category === hash)) setActive(hash)
  }, [])

  const selectTab = (category) => {
    setActive(category)
    window.history.replaceState(null, "", `#${category}`)
  }

  const postsFor = (category) =>
    posts.filter((node) => (node.frontmatter.category || "3d") === category)

  const current = sections.find((s) => s.category === active)
  const currentPosts = postsFor(active)

  return (
    <Layout>
      <h2 style={{ marginBottom: rhythm(0.5) }}>Blog</h2>
      <p style={{ color: '#666', marginBottom: rhythm(1.5) }}>
        Hands-on writing on AI for film making and the agentic harnesses that drive creative production.
      </p>

      <div className="blog-tabs" role="tablist">
        {sections.map((section) => (
          <button
            key={section.category}
            type="button"
            role="tab"
            aria-selected={active === section.category}
            className={`blog-tab ${active === section.category ? "blog-tab-active" : ""}`}
            onClick={() => selectTab(section.category)}
          >
            <span className="blog-tab-title">{section.title}</span>
            <span className="blog-tab-count">
              {postsFor(section.category).length}{" "}
              {postsFor(section.category).length === 1 ? "post" : "posts"}
            </span>
          </button>
        ))}
      </div>

      <section role="tabpanel">
        <p style={{ color: '#666', marginBottom: rhythm(1.5) }}>{current.intro}</p>
        {currentPosts.length === 0 && (
          <p style={{ color: '#888' }}>No posts here yet - stay tuned.</p>
        )}
        {currentPosts.map((node) => (
          <PostPreview key={node.frontmatter.slug} node={node} />
        ))}
      </section>

      <style jsx>{`
        .blog-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .blog-tab {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.35rem;
          padding: 1rem 1.25rem;
          background: #fff;
          border: 1.5px solid #e5e5e5;
          border-radius: 8px;
          cursor: pointer;
          font: inherit;
          text-align: left;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .blog-tab:hover {
          border-color: #d35400;
        }

        .blog-tab-active {
          border-color: #d35400;
          background: #fdf2eb;
        }

        .blog-tab-title {
          font-weight: 700;
          font-size: 1rem;
          color: #1a1a1a;
        }

        .blog-tab-active .blog-tab-title {
          color: #d35400;
        }

        .blog-tab-count {
          font-size: 0.8rem;
          color: #888;
        }

        @media (max-width: 600px) {
          .blog-tabs {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
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
