/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Box, Flex } from "rebass"
import { Separator } from "../ui-components"
import TeamMember from "./TeamMember"

export const TeamBlock = ({ content, title, cssclass, anchor, teamMember }) => {
  return (
    <Box id={anchor} className={cssclass || ""}>
      <Box sx={{ textAlign: `center` }}>
        <Styled.h3 dangerouslySetInnerHTML={{ __html: title }} />

        <Separator my="40px" />
        <Styled.p dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
      <Flex>
        {teamMember.map(member => (
          <Box sx={{ width: [`50%`, `33%`, `25%`] }}>
            <TeamMember member={member} />
          </Box>
        ))}
      </Flex>
    </Box>
  )
}
