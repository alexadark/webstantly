/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading } from "rebass"

export const HeadingBlock = ({ heading, type, anchor, cssclass, centered }) => {
  const style = centered && { textAlign: `center` }
  return (
    <Heading
      id={anchor}
      className={cssclass || ""}
      as={type}
      sx={{ textTransform: `uppercase`, ...style }}
    >
      {heading}
    </Heading>
  )
}
