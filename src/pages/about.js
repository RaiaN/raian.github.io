import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <section className="about-intro">
        <h2>About</h2>
        <p className="lead">
          I'm Petr Leontev - Solutions Architect with 10+ years of experience
          turning complex, ambiguous technical challenges into production-grade systems.
        </p>
      </section>

      <section className="about-body">
        <h3 className="section-title">What I Do</h3>
        <p>
          I work at the intersection of Generative AI, cloud infrastructure, and
          media technology. I collaborate directly with C-level stakeholders,
          research teams, and engineering organizations to design solutions that
          are both technically sound and business-aligned.
        </p>
        <p>
          My focus areas include multimodal AI systems (text-to-video, image-to-video),
          large-scale synthetic data pipelines, cloud architecture, and technical strategy.
          I'm skilled at crafting compelling PoCs that de-risk investment decisions and
          building scalable abstractions that streamline delivery across engagements.
        </p>

        <h3 className="section-title">How I Got Here</h3>
        <p>
          My career started deep in real-time 3D - I spent nearly five years running an
          immersive technology consultancy, delivering bespoke solutions with Unreal Engine
          for clients across the US, EU, UK, China, and Japan. I built everything from
          investor demos and production workflows to low-level engine plugins (Vulkan Video,
          runtime video encoding, texture streaming).
        </p>
        <p>
          That foundation in systems-level thinking and client-facing delivery naturally
          evolved into Generative AI. I moved into architecting cloud-first synthetic data
          pipelines for foundational video models, partnering with research teams on technical
          validation, and leading cost-benefit analyses that guided executive investment decisions.
          Today, I focus on Solution Architecture for multimodal AI and media production at scale.
        </p>

        <h3 className="section-title">Tech Stack</h3>
        <p>
          Python, C++, Node.js, cloud platforms (AWS, GCP), GenAI/ML tooling,
          Unreal Engine 4/5, Vulkan, Docker, Kubernetes.
        </p>

        <h3 className="section-title">Outside Work</h3>
        <p>
          I enjoy travelling, hiking, bouldering, roller skating, watching esports,
          and playing games.
        </p>
      </section>

      <section className="contacts">
        <h3 className="section-title">Get in Touch</h3>
        <ul className="contact-list">
          <li>
            <a href="https://calendly.com/petr-leontev/30min" target="_blank" rel="noopener noreferrer">
              Calendly
            </a>
            <span className="contact-note"> - book a 30-minute chat</span>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/petr-leontev" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/RaiaN" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <span className="email">leontev dot petr at gmail dot com</span>
          </li>
        </ul>
      </section>

      <style jsx>{`
        .about-intro {
          margin-bottom: 1.5rem;
        }

        .lead {
          font-size: 1.1rem;
          line-height: 1.65;
          color: #444;
        }

        .about-body p {
          line-height: 1.7;
          color: #444;
        }

        .section-title {
          color: #d35400;
          font-size: 1.1rem;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .contacts {
          margin-top: 1rem;
        }

        .contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-list li {
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .contact-note {
          color: #888;
          font-size: 0.85rem;
        }

        .email {
          color: #666;
        }
      `}</style>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="About"
    keywords={[
      `petr leontev`,
      `solutions architect`,
      `generative ai`,
      `about`,
    ]}
  />
)

export default AboutPage
