/** @jsxImportSource theme-ui */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import Header from "../Header"
import Footer from "../Footer"

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
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Wrapper>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
