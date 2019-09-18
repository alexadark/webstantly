/** @jsx jsx */
import { jsx, Box, Styled } from "theme-ui"

const FeatureCard = ({ card }) => {
  const {
    content,
    title,
    icon: { sourceUrl, altText },
  } = card
  return (
    <Box sx={{ width: ["100%", "33%"] }}>
      <img src={sourceUrl} alt={altText} sx={{ textAlign: `center` }} />
      <Styled.h3 sx={{ textAlign: `center`, fontSize: [1, 2] }}>
        {title}
      </Styled.h3>
    </Box>
  )
}

export default FeatureCard
