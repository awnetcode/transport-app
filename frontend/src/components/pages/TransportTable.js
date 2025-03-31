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

  if (distance <= lastZone) {
    return zonesPrices[zonesPrices.length - 1] || lastZonePrice;
  }
  return lastZonePrice + (distance - lastZone) * pricePerKm;
};

const TransportTable = () => {

  const distances = Array.from({ length: 100 }, (_, i) => i + 1);
  const transportTypes = Object.keys(transportData);

  return (
    <TableContainer component={Paper}
    sx={{
        bgcolor:'transparent',
    }}
    
    >
    <Table sx={{ 
        minWidth: 600,
        color:'var(--cadet-gray)'
         }} aria-label="simple table">
      <TableHead>
        <TableRow sx={{color:'inherit'}}>
        <TableCell sx={{color:'inherit'}} >Odległość</TableCell>
            {transportTypes.map((type) => (
                <TableCell key={type} sx={{color:'inherit'}} align="right">{transportData[type].polishName}</TableCell>
            ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {distances.map((distance) => (
          <TableRow
            key={distance}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{color:'inherit'}} component="th" scope="row">
              {distance}
            </TableCell>
            {transportTypes.map((type) => (
            <TableCell sx={{color:'inherit'}} component="th" scope="row" align="right">
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
