import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const recentContributions = [
  {
    title: "FilmAgent",
    role: "Solution Architect",
    image: "/filmagent/filmagent.jpg",
    imageAlt: "FilmAgent: agent session on the left, generated film takes on the right",
    desc: "Agentic co-pilot for filmmakers. Script, cast, locations, video takes, previz, storyboards and shot edits in one project, driven by chat.",
    points: [
      "Agent plans each request across 30 tools, up to 60 tool calls per request",
      "Checks frames of every result before reporting; failed renders are reported, not silently retried",
      "Video: Seedance 2.5, 5-30 s takes with sound, 480p drafts, 1080p finals",
      "Images: Seedream 5.0 Pro, up to 4K and 10 references. Planner: Seed 2.1 Turbo",
      "Next.js app, models on BytePlus ModelArk, projects and media in TOS storage",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/RaiaN/FilmAgent" },
      { label: "Deck", href: "/filmagent/deck/" },
      { label: "One-pager (PDF)", href: "/filmagent/FilmAgent_OnePager.pdf" },
      { label: "Deck (PDF)", href: "/filmagent/FilmAgent_Deck.pdf" },
    ],
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero">
        <h1 className="hero-title">Applied AI Architecture</h1>
        <p className="hero-subtitle">
          How to take Generative AI and integrate it into real production.
        </p>
      </section>

      <section className="contributions">
        <h2 className="section-heading">Recent Contributions</h2>
        {recentContributions.map((c) => (
          <article key={c.title} className="contribution-card">
            <a href={c.links[0].href} target="_blank" rel="noopener noreferrer" className="contribution-image-link">
              <img src={c.image} alt={c.imageAlt} className="contribution-image" loading="lazy" />
            </a>
            <div className="contribution-body">
              <h3 className="contribution-title">{c.title}</h3>
              <p className="contribution-role">{c.role}</p>
              <p className="contribution-desc">{c.desc}</p>
              <ul className="contribution-points">
                {c.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <div className="contribution-links">
                {c.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <style jsx>{`
        .hero {
          padding: 2rem 0 1rem;
        }

        .hero-title {
          font-size: 2.4rem;
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 0;
        }

        .section-heading {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #d35400;
          display: inline-block;
        }

        .contributions {
          padding: 2rem 0;
        }

        .contribution-card {
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .contribution-card:hover {
          border-color: #d35400;
          box-shadow: 0 2px 12px rgba(211, 84, 0, 0.08);
        }

        .contribution-image-link {
          display: block;
          box-shadow: none;
          border-bottom: 1px solid #e5e5e5;
        }

        .contribution-image {
          display: block;
          width: 100%;
          height: auto;
          margin: 0;
        }

        .contribution-body {
          padding: 1.5rem;
        }

        .contribution-title {
          font-size: 1.2rem;
          margin: 0 0 0.25rem;
        }

        .contribution-role {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #d35400;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .contribution-desc {
          font-size: 0.95rem;
          color: #444;
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }

        .contribution-points {
          list-style: none;
          margin: 0 0 1rem;
          padding: 0;
        }

        .contribution-points li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.4rem;
          font-size: 0.9rem;
          color: #555;
          line-height: 1.5;
        }

        .contribution-points li::before {
          content: "-";
          position: absolute;
          left: 0;
          color: #d35400;
        }

        .contribution-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          font-size: 0.9rem;
          font-weight: 600;
        }

        @media (max-width: 700px) {
          .hero-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Applied AI Architecture"
    keywords={[
      `applied ai architecture`,
      `solutions architect`,
      `generative ai`,
      `ai agents`,
      `filmagent`,
      `media and entertainment`,
    ]}
  />
)

export default IndexPage
