/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export const ContentBlock = ({ content, anchor, cssclass }) => (
  <Styled.root
    id={anchor}
    className={cssclass || ""}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)
