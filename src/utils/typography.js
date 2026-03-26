import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => ({
  html: {
    overflowY: 'auto',
  },
  body: {
    fontWeight: 400,
  },
  a: {
    color: '#d35400',
    textDecoration: 'none',
    boxShadow: 'none',
    transition: 'color 0.2s ease'
  },
  'a:hover': {
    color: '#e67e22',
    textDecoration: 'none',
    boxShadow: 'none'
  },
  h1: {
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  'h2, h3, h4': {
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  'p img, .gatsby-resp-image-wrapper': {
    marginBottom: '1.5rem'
  }
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
