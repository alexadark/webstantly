/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Image, Box } from "rebass"
import GatsbyImage from "../GatsbyImage"

const ProjectItem = ({ project }) => {
  const { title, content, projectFields, featuredImage, id } = project
  return (
    <Box key={id}>
      <GatsbyImage img={featuredImage} />
      <Styled.h4 sx={{ textAlign: `center` }}>{title}</Styled.h4>
    </Box>
  )
}

export default ProjectItem
