/** @jsx jsx */
import { jsx } from "theme-ui"
import { Accordion, AccordionPanel, Box } from "grommet"

const AccordionTest = () => {
  return (
    <Box fill="horizontal">
      <Accordion animate={true} multiple={true} margin="small">
        <AccordionPanel label="Panel 1">
          <Box background="light-1">Panel 1 content</Box>
        </AccordionPanel>
        <AccordionPanel label="Panel 2">
          <Box height="small" background="secondary">
            Panel 2 content
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Panel 3">
          <Box height="medium" background="light-1">
            Panel 3 content
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  )
}

export default AccordionTest
