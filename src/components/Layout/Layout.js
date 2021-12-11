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
      <Wrapper>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  padding: 0 2rem;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
