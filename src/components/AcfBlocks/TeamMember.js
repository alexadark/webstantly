/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Box, Flex } from "rebass"
import GatsbyImage from "../GatsbyImage"
import { LinkedinOption, Twitter } from "grommet-icons"

const TeamMember = ({
  member: {
    bio,
    intro,
    linkedin,
    twitter,
    name,
    picture,

    className,
  },
}) => {
  return (
    <Box>
      <GatsbyImage img={picture} className="memberPic" />
      <Box sx={{ textAlign: `center` }}>
        <Styled.h5>{name}</Styled.h5>
        <Box sx={{ lineHeight: `1.3`, m: `5px`, fontSize: 1 }}>{intro}</Box>
      </Box>
      <Flex sx={{ justifyContent: `center`, div: { mx: 2 } }}>
        <Box>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinOption color="#1279B3" />
          </a>
        </Box>
        <Box>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <Twitter color="#2BA3EF" />
          </a>
        </Box>
      </Flex>
    </Box>
  )
}

export default TeamMember
