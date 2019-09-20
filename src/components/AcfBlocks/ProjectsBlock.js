/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Box, Flex } from "rebass"
import { Separator } from "../ui-components"
import Project from "./ProjectItem"
import Slider from "react-slick"

export const ProjectsBlock = ({
  cssclass,
  anchor,
  content,
  title,
  subtitle,
  projects,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  return (
    <Box id={anchor} className={cssclass || ""}>
      <Box sx={{ textAlign: `center` }}>
        <Styled.h3 dangerouslySetInnerHTML={{ __html: title }} />
        <Separator my="40px" />
        <Styled.h5 dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Styled.p dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
      <Slider {...settings}>
        {projects.map(project => (
          <Project project={project} />
        ))}
      </Slider>
    </Box>
  )
}
