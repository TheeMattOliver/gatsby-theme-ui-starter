/** @jsxImportSource theme-ui */

import React from "react"
import { Link as GatsbyLink } from "gatsby"

export default props => (
  <GatsbyLink
    {...props}
    activeClassName="active"
    sx={{
      color: "primary",
      "&.active": {
        color: "primary",
      },
      "&.hover": {
        color: "secondary",
      },
    }}
  />
)
