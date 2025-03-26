import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

const Info = () => {
  return (
    <Box>
    <Accordion>
    <AccordionSummary
      //expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span">Podstawowe informacje</Typography>
    </AccordionSummary>
    <AccordionDetails>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionDetails>
  </Accordion>
    <Accordion>
    <AccordionSummary
      //expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span">Rodzaje transportów</Typography>
    </AccordionSummary>
    <AccordionDetails>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      //expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <Typography component="span">Palety</Typography>
    </AccordionSummary>
    <AccordionDetails>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionDetails>
  </Accordion>
    </Box>
  )
}

export default Info