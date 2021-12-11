/** @jsxImportSource theme-ui */

import React from "react"
import { Link as GatsbyLink } from "gatsby"

// this rule silences the 'Assign arrow function to a variable before exporting as module' warning
/* eslint-disable import/no-anonymous-default-export */
export default props => (
  <GatsbyLink
    {...props}
    activeClassName="active"
    sx={{
      color: "primary",
      textDecoration: "none",
      "&.active": {
        color: "primary",
      },
      "&.hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    }}
  />
)
