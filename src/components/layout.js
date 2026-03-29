import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "./global.css"

import favicon from "../../favicon.png"

const Layout = ({ children, wide }) => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/expertise", label: "Expertise" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
  ]

  return (
    <React.Fragment>
      <div className={`layout-container ${wide ? 'layout-wide' : ''}`}>
        <Helmet>
          <title>Petr Leontev - Solutions Architect</title>
          <link rel="icon" type="image/png" href={favicon} />
        </Helmet>
        <header className="layout-header">
          <Link to="/" className="author-link">
            <span className="author">Petr Leontev</span>
          </Link>
          <nav>
            <ul className="navigation">
              {navLinks.map(link => (
                <li key={link.to} className="nav-item">
                  <Link to={link.to} activeClassName="nav-active">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="layout-content">
          {children}
        </main>
        <footer className="layout-footer">
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/petr-leontev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="footer-sep">/</span>
            <a href="https://github.com/RaiaN" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="footer-sep">/</span>
            <a href="https://calendly.com/petr-leontev/30min" target="_blank" rel="noopener noreferrer">Calendly</a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Petr Leontev</p>
        </footer>
      </div>
      <style jsx>
      {`
        .layout-container {
          margin: 0 auto;
          max-width: 780px;
          padding: 2rem 1.5rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .layout-wide {
          max-width: 960px;
        }

        .layout-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #e5e5e5;
          margin-bottom: 2.5rem;
        }

        .author {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .author-link {
          color: #1a1a1a;
          text-decoration: none;
          box-shadow: none;
        }

        .author-link:hover {
          color: #d35400;
          box-shadow: none;
        }

        .navigation {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 1.5rem;
        }

        .nav-item {
          list-style: none;
          margin: 0;
        }

        .nav-item :global(a) {
          color: #555;
          text-decoration: none;
          box-shadow: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-item :global(a:hover),
        .nav-item :global(a.nav-active) {
          color: #d35400;
        }

        .layout-content {
          flex: 1;
        }

        .layout-footer {
          margin-top: 4rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e5e5e5;
          text-align: center;
        }

        .footer-links {
          margin-bottom: 0.5rem;
        }

        .footer-links a {
          color: #666;
          text-decoration: none;
          box-shadow: none;
          font-size: 0.85rem;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: #d35400;
        }

        .footer-sep {
          margin: 0 0.5rem;
          color: #ccc;
        }

        .footer-copy {
          font-size: 0.8rem;
          color: #999;
          margin: 0;
        }

        @media (max-width: 600px) {
          .layout-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .navigation {
            gap: 1rem;
          }

          .layout-container {
            padding: 1.25rem 1rem;
          }
        }
      `}
      </style>
    </React.Fragment>
  )
}

export default Layout
