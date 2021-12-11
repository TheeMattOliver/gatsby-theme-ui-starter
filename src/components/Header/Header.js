import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { useColorMode } from "theme-ui"

import InvisibleButton from "../Button/InvisibleButton"
import Link from "../Link"

const modes = ["light", "dark", "gray", "cyan", "book"]

const Header = ({ siteTitle, ...props }) => {
  const [mode, setMode] = useColorMode()
  const cycleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return (
    <Wrapper>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
      <ButtonWrapper>
        <InvisibleButton title="Toggle Color Mode" onClick={cycleMode}>
          {mode}
        </InvisibleButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem;
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
