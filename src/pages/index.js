import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const expertisePillars = [
  {
    title: "Generative AI & Multimodal Models",
    desc: "Text-to-video, image-to-video, synthetic data generation. Building and evaluating production pipelines for foundational AI models.",
  },
  {
    title: "Cloud Architecture & Data Pipelines",
    desc: "Designing scalable cloud-first systems capable of processing hundreds of millions of assets. Cost optimization and vendor strategy.",
  },
  {
    title: "Technical Strategy & PoC Delivery",
    desc: "Translating ambiguous business requirements into compelling prototypes. Technical validation for C-level decision makers.",
  },
  {
    title: "Media & Entertainment",
    desc: "Deep domain expertise across gaming, film, ads production, real-time 3D, and streaming technologies.",
  },
]

const impactStats = [
  { value: "100M+", label: "Synthetic assets pipeline capacity" },
  { value: "12+", label: "GenAI PoCs delivered to executives" },
  { value: "40%", label: "Data acquisition cost reduction" },
  { value: "10+", label: "Years of SA experience" },
]

const IndexPage = () => {
  return (
    <Layout wide>
      <section className="hero">
        <p className="hero-label">Solutions Architect</p>
        <h1 className="hero-title">
          Turning deep ambiguity into scalable AI&nbsp;and cloud solutions
        </h1>
        <p className="hero-subtitle">
          I partner with research teams, design partners, and executives to architect
          production-grade Generative AI systems for media, entertainment, and enterprise.
        </p>
        <div className="hero-cta">
          <a
            href="https://calendly.com/petr-leontev/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Let's talk
          </a>
          <Link to="/expertise" className="btn-secondary">
            View expertise
          </Link>
        </div>
      </section>

      <section className="pillars">
        <h2 className="section-heading">What I Do</h2>
        <div className="pillars-grid">
          {expertisePillars.map((p) => (
            <div key={p.title} className="pillar-card">
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="impact">
        <h2 className="section-heading">Impact</h2>
        <div className="impact-grid">
          {impactStats.map((s) => (
            <div key={s.label} className="impact-card">
              <span className="impact-value">{s.value}</span>
              <span className="impact-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <p className="cta-text">
          Looking for a Solutions Architect who can bridge research and production?
        </p>
        <a
          href="https://calendly.com/petr-leontev/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Schedule a conversation
        </a>
      </section>

      <style jsx>{`
        .hero {
          padding: 2rem 0 3rem;
        }

        .hero-label {
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.8rem;
          color: #d35400;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .hero-title {
          font-size: 2.4rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          max-width: 680px;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          line-height: 1.65;
          color: #555;
          max-width: 600px;
          margin-bottom: 2rem;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .btn-primary {
          display: inline-block;
          background: #d35400;
          color: #fff;
          padding: 0.7rem 1.5rem;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: none;
          transition: background 0.2s ease;
        }

        .btn-primary:hover {
          background: #b94800;
          color: #fff;
        }

        .btn-secondary {
          display: inline-block;
          color: #d35400;
          padding: 0.7rem 1.5rem;
          border: 1.5px solid #d35400;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: none;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .btn-secondary:hover {
          background: #d35400;
          color: #fff;
        }

        .section-heading {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #d35400;
          display: inline-block;
        }

        .pillars {
          padding: 2.5rem 0;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .pillar-card {
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          padding: 1.5rem;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .pillar-card:hover {
          border-color: #d35400;
          box-shadow: 0 2px 12px rgba(211, 84, 0, 0.08);
        }

        .pillar-title {
          font-size: 1.05rem;
          margin-bottom: 0.5rem;
          margin-top: 0;
        }

        .pillar-desc {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.55;
          margin-bottom: 0;
        }

        .impact {
          padding: 2.5rem 0;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .impact-card {
          text-align: center;
          padding: 1.25rem 0.75rem;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
        }

        .impact-value {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #d35400;
          margin-bottom: 0.25rem;
        }

        .impact-label {
          display: block;
          font-size: 0.8rem;
          color: #666;
          line-height: 1.35;
        }

        .cta-section {
          text-align: center;
          padding: 3rem 0 1rem;
        }

        .cta-text {
          font-size: 1.15rem;
          color: #333;
          margin-bottom: 1.25rem;
        }

        @media (max-width: 700px) {
          .hero-title {
            font-size: 1.8rem;
          }

          .pillars-grid {
            grid-template-columns: 1fr;
          }

          .impact-grid {
            grid-template-columns: 1fr 1fr;
          }

          .hero-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Petr Leontev - Solutions Architect"
    keywords={[
      `solutions architect`,
      `generative ai`,
      `multimodal ai`,
      `cloud architecture`,
      `media and entertainment`,
      `technical strategy`,
    ]}
  />
)

export default IndexPage
