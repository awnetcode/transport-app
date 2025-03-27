import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

const Info = () => {
  return (
    <Box >
    <Accordion
     sx={{
      mb:'10px',
      bgcolor:'transparent',
      color:'inherit'
    }}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{color:'var(--cadet-gray)', fontSize:'32px'}} />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span"><h2>Umawianie dostawy</h2></Typography>
    </AccordionSummary>
    <AccordionDetails>
      <h3>Wymagany komentarz do każdego transportu</h3>
Data i godzina dostawy:<br/>
Adres dostawy:<br/>
Paragon czy faktura:<br/>
Forma płatności (tylko w przypadku zamówień PPD): karta/gotówka<br/>
Kod PIN (w przypadku zamówień internetowych na kuchnie i atomie).<br/>
ID karty klienta i nr telefonu przypisany do tej karty (w przypadku klienta PRO).<br/>
Przelew (w przypadku zamówienia opłacanego przelewem).<br/><br/>

UWAGA! Nie piszemy w komentarzu do transportu regułki: "dane tak jak w commerce".<br/>
Przy realizacji transportu nie generują się dane na karcie drogowej oraz czesto bywają one nieaktualne.
    </AccordionDetails>
  </Accordion>
    <Accordion
         sx={{
          mb:'10px',
          bgcolor:'transparent',
          color:'var(--cadet-gray)'
        }}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{color:'var(--cadet-gray)', fontSize:'32px'}} />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span"><h2>Rodzaje transportów</h2></Typography>
    </AccordionSummary>
    <AccordionDetails>
    <h3>Lekki i średni</h3>
Transport lekki to maksymalnie trzy miejsca paletowe o łącznej wadze do 1500kg.<br/>
Transport średni to maksymalnie sześć miejsc paletowych o łącznej wadze do 3000kg.
    <h3>HDS</h3>
 Mały HDS to maksymalnie cztery miejsca paletowe o łącznej wadze nie większej niż 4t. W przypadku gdy klient zdejmuje towar z palet ręcznie, każda rozpoczęta godzina rozładunku to   200 zł do ceny transportu.<br/>
 Średni HDS to maksymalnie sześć miejsc paletowych o łącznej wadze nie większej niż 8t.<br/>
  Duży HDS to maksymalnie dziesięć miejsc paletowych o łącznej wadze nie większej niż 10t. HDSy umawiamy telefonicznie z kierowcą.
   <h3>Bramy przesuwne</h3>
Bramy przesuwne do ogrodzeń jeżdżą HDSami. Brama 6m jedzie małym HDS a 7m dużym.
   <h3>Szybki</h3>
Transport szybki to transport lekki w pierwszej strefie, który jedzie w ciągu 2 godzin od zakupu. Aby zamówić szybki transport klient dostarcza towar do kasy budowlanej i tam zostawia dane. Szybki transport kosztuje 100 zł
    </AccordionDetails>
  </Accordion>
  <Accordion sx={{
           mb:'10px',
           bgcolor:'transparent',
           color:'var(--cadet-gray)'
        }}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{color:'var(--cadet-gray)', fontSize:'32px'}} />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <Typography component="span"><h2>Palety</h2></Typography>
    </AccordionSummary>
    <AccordionDetails>
Palety zwykłe i EURO mają wymiar 80x120cm. Kaucja zwrotna za palety EURO 44444 to 75 zł.<br/>
Za KNAUF KNWO 931217 to 95.94 zł.<br/>
Jedno miejsce paletowe to 8 paczek styropianu lub wełny.<br/>
Nie wysyłamy transportów na paletach CHEP.<br/>
Palety z betonem komórkowym i kostką brukową mają wymiar 100x120cm.<br/>
Palety z płytą G-K mają wymiar 120x260cm. Kaucja zwrotna 905024 to 147.60 zł.
    </AccordionDetails>
  </Accordion>
    </Box>
  )
}

export default Info