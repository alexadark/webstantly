/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Global } from "@emotion/core"
import { GlobalStyles } from "../styles/GlobalStyles"

import Header from "./Header.js"
import Footer from "./Footer.js"

import { Layout as StyledLayout, Container } from "theme-ui"
import { Grommet } from "grommet"
import theme from "../gatsby-plugin-theme-ui"

const Layout = ({ children }) => (
  <Grommet theme={theme} plain>
    <Global styles={GlobalStyles} />

    <StyledLayout>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </StyledLayout>
  </Grommet>
)

export default Layout
