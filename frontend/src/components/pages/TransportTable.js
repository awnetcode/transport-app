import { React } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import transportData from '../../assets/data';



const calculatePrice = (type, distance) => {
  const { lastZone, pricePerKm, lastZonePrice, zonesPrices } = transportData[type];

  // Sprawdzenie czy odległość mieści się w strefach
  if (distance <= lastZone) {
    // Wybór odpowiedniej ceny na podstawie strefy
    if (zonesPrices.length > 1) {
      if (distance <= 10) return zonesPrices[0]; // Strefa 1 (do 10 km)
      if (distance <= 20) return zonesPrices[1]; // Strefa 2 (do 20 km)
      return zonesPrices[2]; // Strefa 3 (do 30 km)
    }
    return zonesPrices[0] || lastZonePrice; // Dla HDS, gdzie jest tylko 1 strefa
  }
  // Poza ostatnią strefą liczymy cenę za każdy dodatkowy km
  return lastZonePrice + (distance - lastZone) * pricePerKm;
};

const TransportTable = () => {

  const distances = Array.from({ length: 100 }, (_, i) => i + 1);
  const transportTypes = Object.keys(transportData);

  return (
    <TableContainer component={Paper}
    sx={{
      mt:{lg:'0', xs:'60px'},
      boxShadow:{lg:'var(--light-shadow)', xs:'none'},
        bgcolor:'transparent',
        maxWidth:{xs:'100%', lg:'80%'},
        m:'0 auto',
        maxHeight: {sm:'100vh', lg:'600px'},
        overflowX: 'auto',
        overflowY: 'scroll',
        p:{xs:0, lg:'20px'},
        scrollbarWidth:'none',
        msOverflowStyle:'none',
        '&::-webkit-scrollbar': { display: 'none' },
    }}>
    <Table sx={{ 
        color:'var(--cadet-gray)',
        tableLayout: 'fixed',
        width: '100%' 
         }} aria-label="simple table">
      <TableHead sx={{ 
        position: 'sticky',
        top: 0, 
        bgcolor: 'var(--gunmetal)', 
        zIndex: 1 }}>
        <TableRow sx={{
          color:'inherit',
          maxWidth:'100%'
          }}>
        <TableCell sx={{
          color:'inherit',
          fontSize:{xs:'10px', lg:'16px'}
          }} align="center">Odległość</TableCell>
            {transportTypes.map((type) => (
                <TableCell key={type} sx={{
                  color:'inherit', 
                  fontSize:{xs:'10px', lg:'16px'}
                }} align="center">{transportData[type].polishName}</TableCell>
            ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {distances.map((distance) => (
          <TableRow
            key={distance}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{
              color:'inherit',
              fontSize:{xs:'10px', lg:'16px'}
              }} align="center">
              {distance}
            </TableCell>
            {transportTypes.map((type) => (
           <TableCell key={type} sx={{
             color: 'inherit',
             fontSize:{xs:'10px', lg:'16px'}
              }} align="center">
           {calculatePrice(type, distance)}
           </TableCell>
))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TransportTable;
