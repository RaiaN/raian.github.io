import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => ({
  a: {
    color: '#d35400',
    textDecoration: 'none',
    boxShadow: '0 1px 0 0 #d35400',
    transition: 'color 0.2s ease, box-shadow 0.2s ease'
  },
  'a:hover': {
    color: '#e67e22',
    textDecoration: 'none',
    boxShadow: '0 2px 0 0 #e67e22'
  },
  'p img, .gatsby-resp-image-wrapper': {
    marginBottom: '1.5rem'
  }
})

delete Wordpress2016.googleFonts



const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
