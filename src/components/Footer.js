/** @jsx jsx */
import { Container, Footer as StyledFooter, jsx } from "theme-ui"
import FooterContent from "./FooterContent"

const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterContent />
    </Container>
  </StyledFooter>
)

export default Footer
