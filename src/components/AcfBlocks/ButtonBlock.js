/** @jsx jsx */
import { jsx } from "theme-ui"
import { Button, Flex, Box } from "rebass"
import { Link } from "gatsby"

export const ButtonBlock = ({
  cssclass,
  anchor,
  variant,
  button,
  position,
}) => {
  const { title, target, url } = button
  const style =
    position === "center"
      ? { justifyContent: `center` }
      : position === "left"
      ? { justifyContent: `start` }
      : { justifyContent: `end` }
  return (
    <Flex sx={style}>
      <Box>
        <Button
          id={anchor}
          className={cssclass || ""}
          variant={variant || "primary"}
          button={button}
        >
          {target === "_blank" ? (
            <a href={url} target="_blank">
              {title}
            </a>
          ) : (
            <Link to={url}>{title}</Link>
          )}
        </Button>
      </Box>
    </Flex>
  )
}
