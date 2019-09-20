/** @jsx jsx */
import { jsx, Container, Flex, Header as StyledHeader } from "theme-ui"

import { useStaticQuery, graphql } from "gatsby"

import Menu from "./Menu"
import SiteBranding from "./SiteBranding"

import { slide as SlideMenu } from "react-burger-menu"
import Headroom from "react-headroom"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wpgraphql {
        generalSettings {
          title
          url
        }
      }
    }
  `)

  const { title, url } = data.wpgraphql.generalSettings

  return (
    <Headroom sx={{}}>
      <StyledHeader
        sx={{
          bg: `white`,
          boxShadow: `default`,
          ".bm-burger-button": {
            position: "relative",
            width: "20px",
            height: "20px",
            right: "36px",
            display: ["block", "block", "none"],

            ":hover": {
              cursor: `pointer`,
              ".bm-burger-bars": {
                background: t => t.colors.primary,
                opacity: 1,
              },
            },
          },
          ".bm-burger-bars": {
            background: `#444`,
            transition: `all .4s ease-in-out`,
          },
          "div:nth-child(3)": {
            display: [`block`, `block`, `none`],
          },
        }}
      >
        <Container sx={{ py: [3, 1] }}>
          <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <SiteBranding title={title} />
            <div
              sx={{ display: ["none", "none", "block"], variant: `menus.main` }}
            >
              <Menu wordPressUrl={url} />
            </div>
            <SlideMenu
              right
              width={"300px"}
              sx={{
                bg: `secondary`,
                color: `primary`,
                top: 0,
                height: `100vh !important`,

                a: {
                  color: `white`,
                },
                fontSize: 2,
                fontFamily: `heading`,
                ".sub-menu": {
                  pl: 1,
                  ".menu-item": {
                    fontSize: 1,
                  },
                },
                ".bm-cross-button": {
                  cursor: `pointer`,
                },
                ".bm-cross": {
                  bg: `white`,
                },
              }}
            >
              <Menu wordPressUrl={url} />
            </SlideMenu>
          </Flex>
        </Container>
      </StyledHeader>
    </Headroom>
  )
}

export default Header
