/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { Separator } from "../ui-components"
import FeatureCard from "./FeatureCard"

export const FeaturesBlock = ({ content, title, cards, cssclass, anchor }) => {
  return (
    <div className={cssclass || ""} id={anchor}>
      <Styled.h3 sx={{ textAlign: `center`, textTransform: `uppercase` }}>
        {title}
      </Styled.h3>
      <Separator my="40px" />
      <Styled.root
        sx={{ textAlign: `center` }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Flex sx={{ flexWrap: `wrap`, mt: 50 }}>
        {cards && cards.map(card => <FeatureCard card={card} />)}
      </Flex>
    </div>
  )
}
