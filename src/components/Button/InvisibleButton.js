/** @jsxImportSource theme-ui */

import React from "react"

const InvisibleButton = ({ variant = "primary", ...props }) => (
  <button
    {...props}
    sx={{
      appearance: "none",
      fontFamily: "inherit",
      fontSize: 16,
      textTransform: "none",
      letterSpacing: "0.1em",
      fontWeight: "bold",
      m: 0,
      px: 3,
      py: 2,
      border: 0,
      borderRadius: 4,
      color: "text",
      bg: "gray",
      "&:focus": {
        outline: "1px solid",
      },
    }}
  />
)

export default InvisibleButton
