import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const sections = [
  {
    id: "genai",
    title: "Generative AI & Multimodal Models",
    description:
      "I architect end-to-end pipelines for foundational generative models — text-to-video, image-to-video, and large-scale synthetic data generation. My work spans model evaluation, data pipeline design, and bridging research prototypes with production-grade infrastructure.",
    highlights: [
      "Architected synthetic data generation pipelines capable of producing 100M+ assets",
      "Reduced reliance on third-party data and lowered acquisition costs by up to 40%",
      "Partnered with research teams and design partners to deliver 12+ GenAI-focused PoCs and Proofs of Value",
      "Provided technical validation that accelerated strategic decisions by C-level stakeholders",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Architecture & Data Pipelines",
    description:
      "I design highly scalable, cloud-first systems that handle massive data throughput while keeping costs predictable. From vendor negotiations to infrastructure blueprints, I guide technical and business decisions for large-scale operations.",
    highlights: [
      "Drove vendor negotiations and cost-benefit analyses across cloud, infrastructure, and content acquisition",
      "Guided executive investment decisions for large-scale data operations",
      "Designed deterministic physics frameworks and simulation systems for research workflows",
      "Built production systems processing hundreds of millions of synthetic video assets",
    ],
  },
  {
    id: "strategy",
    title: "Technical Strategy & PoC Delivery",
    description:
      "I collaborate directly with C-level decision makers to understand business needs and translate them into impactful technical solutions. I craft compelling prototypes and scalable abstractions that streamline delivery across engagements.",
    highlights: [
      "Delivered compelling PoCs that de-risked multi-million dollar technology investments",
      "Established repeatable frameworks for rapid prototyping and technical validation",
      "Bridged communication between research, engineering, and business stakeholders",
      "Created scalable solution architectures adopted across multiple client engagements",
    ],
  },
  {
    id: "realtime",
    title: "Real-time 3D & Streaming",
    description:
      "With nearly 5 years running an immersive technology consultancy and deep Unreal Engine expertise, I bring hands-on experience delivering 3D, streaming, and visualization solutions for startups and enterprises across the US, EU, UK, China, and Japan.",
    highlights: [
      "Founded and led a consultancy delivering bespoke immersive tech solutions across global markets",
      "Integrated Vulkan Video API into Unreal Engine 5 for cross-platform media playback",
      "Built cross-platform runtime video encoding plugins for Unreal Engine",
      "Delivered investor demos, production workflows, and real-time visualization systems",
    ],
  },
]

const ExpertisePage = () => {
  return (
    <Layout>
      <section className="expertise-intro">
        <h2 className="page-title">Expertise</h2>
        <p className="intro-text">
          I operate at the intersection of AI research and production engineering — turning
          ambiguous requirements into scalable, cost-effective systems. Here's where I add the most value.
        </p>
      </section>

      {sections.map((section) => (
        <section key={section.id} className="expertise-section">
          <h3 className="section-title">{section.title}</h3>
          <p className="section-desc">{section.description}</p>
          <ul className="highlights">
            {section.highlights.map((h, i) => (
              <li key={i} className="highlight-item">{h}</li>
            ))}
          </ul>
        </section>
      ))}

      <section className="cta-section">
        <p className="cta-text">
          Want to discuss how I can help with your next challenge?
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
        .expertise-intro {
          margin-bottom: 2rem;
        }

        .page-title {
          margin-bottom: 0.75rem;
        }

        .intro-text {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.65;
          max-width: 620px;
        }

        .expertise-section {
          padding: 2rem 0;
          border-bottom: 1px solid #e5e5e5;
        }

        .expertise-section:last-of-type {
          border-bottom: none;
        }

        .section-title {
          color: #d35400;
          margin-bottom: 0.75rem;
          margin-top: 0;
          font-size: 1.2rem;
        }

        .section-desc {
          font-size: 0.95rem;
          color: #444;
          line-height: 1.65;
          margin-bottom: 1rem;
        }

        .highlights {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .highlight-item {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #555;
          line-height: 1.5;
        }

        .highlight-item::before {
          content: "—";
          position: absolute;
          left: 0;
          color: #d35400;
        }

        .cta-section {
          text-align: center;
          padding: 3rem 0 1rem;
        }

        .cta-text {
          font-size: 1.1rem;
          color: #333;
          margin-bottom: 1.25rem;
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
      `}</style>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Expertise"
    keywords={[
      `solutions architect`,
      `generative ai`,
      `multimodal models`,
      `cloud architecture`,
      `technical strategy`,
      `unreal engine`,
    ]}
  />
)

export default ExpertisePage
