/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading } from "rebass"

export const HeadingBlock = ({ heading, type, anchor, cssclass }) => (
  <Heading
    id={anchor}
    className={cssclass || ""}
    as={type}
    sx={{ textTransform: `uppercase`, textAlign: `center` }}
  >
    {heading}
  </Heading>
)
