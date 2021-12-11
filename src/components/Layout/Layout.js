/** @jsxImportSource theme-ui */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "theme-ui"
import Prism from "@theme-ui/prism"
import Header from "../Header"
import Footer from "../Footer"

import theme from "../../theme"

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
}

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme} components={components}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <Wrapper>
          <main>{children}</main>
          <Footer />
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  padding: 0 2rem;
`
const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  // this img rule is over-specific and will cause problems in the cascade;
  // it's being used to illustrate how large images should render in MDX
  // according to a theme in 'pages/using-mdx.mdx'
  img {
    max-width: 100%;
    box-sizing: content-box;
  }
`
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
