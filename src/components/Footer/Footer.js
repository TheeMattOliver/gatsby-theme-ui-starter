/** @jsxImportSource theme-ui */

import React from "react"

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a sx={{ color: "primary" }} href="https://www.gatsbyjs.com">
        Gatsby
      </a>
    </footer>
  )
}
