/* eslint-disable react/jsx-pascal-case */
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useThemeUI } from "theme-ui"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Link from "../components/Link"

const IndexPage = () => {
  const { theme } = useThemeUI()
  console.log(theme)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello there, hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <div sx={{ mb: 4 }}>
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
          <Link to="/using-mdx/">Go to "Using MDX"</Link> <br />
          <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
          <Link to="/using-dsg">Go to "Using DSG"</Link>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
