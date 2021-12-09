import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import Header from "./header"

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Wrapper
        sx={{
          color: "primary",
          fontFamily: "heading",
          bg: "background",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin: "0 auto";
  max-width: 960;
  padding: "0 1.0875rem 1.45rem";
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
