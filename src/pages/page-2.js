/* eslint-disable react/jsx-pascal-case */
import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Link from "../components/Link"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
