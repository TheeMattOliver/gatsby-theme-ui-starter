import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { css, useColorMode } from "theme-ui"

const modes = ["light", "dark", "gray", "cyan", "book"]

const Header = ({ siteTitle }) => {
  const [mode, setMode] = useColorMode()
  const cycleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return (
    <Wrapper>
      <h1>
        <StyledLink
          sx={{
            color: "primary",
          }}
          to="/"
        >
          {siteTitle}
        </StyledLink>
      </h1>
      <ButtonWrapper>
        <button
          title="Toggle Color Mode"
          sx={{
            appearance: "none",
            fontFamily: "inherit",
            fontSize: 16,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: "bold",
            border: "none",
            m: 3,
            p: 2,
            color: "text",
            bg: "gray",
            "&:focus": {
              outline: "2px solid",
            },
          }}
          onClick={cycleMode}
        >
          {mode}
        </button>
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  margin-bottom: 2.5rem;
  max-width: 960;
  display: flex;
  align-items: center;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
const ButtonWrapper = styled.div`
  margin-left: auto;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
