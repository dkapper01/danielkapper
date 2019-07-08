import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"

lincolnTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      backgroundImage: "none",
    },
    p: {
      fontFamily: "Inconsolata, monospace",
      color: "rgba(0, 0, 0, 0.6)",
      lineHight: "1.5",
      wordSpacing: "4px",
      fontSize: "15px",
      fontWeight: "100",
    },
  }
}

delete lincolnTheme.googleFonts

const typography = new Typography(lincolnTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
