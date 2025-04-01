import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { bringData } from '../../assets/data';

const Bring = () => {

    const weights = Array.from({length:40}, (_, i) => (i + 1)*25);
    const floors = ['groundFloor', 'Ifloor', 'IIfloor', 'IIIfloor', 'IVfloor', 'forFloor'];

  return (
    <TableContainer component={Paper}
    sx={{
        bgcolor:'transparent',
        minWidth: 600,
        maxHeight: '600px',
        overflow: 'auto',
        p:'20px', 
        scrollbarWidth:'none',
        msOverflowStyle:'none',
        '&::-webkit-scrollbar': { display: 'none' }
    }}>
    <Table sx={{ 
        color:'var(--cadet-gray)',
         }} aria-label="simple table">
      <TableHead sx={{ position: 'sticky', top: 0, bgcolor: 'var(--gunmetal)', zIndex: 1 }}>
        <TableRow sx={{color:'inherit'}}>
            <TableCell sx={{color:'inherit'}}>Waga</TableCell>
            <TableCell sx={{color:'inherit'}}>Parter</TableCell>
            <TableCell sx={{color:'inherit'}}>Pierwsze<br/> piętro<br/>Piwnica</TableCell>
            <TableCell sx={{color:'inherit'}}>Drugie<br/> piętro</TableCell>
            <TableCell sx={{color:'inherit'}}>Trzecie<br/> piętro</TableCell>
            <TableCell sx={{color:'inherit'}}>Czwarte<br/> piętro</TableCell>
            <TableCell sx={{color:'inherit'}}align="right">Każde<br/>kolejne<br/> piętro</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {weights.map((weight, index) => (
                        <TableRow key={index} sx={{ color: 'inherit' }}>
                            <TableCell sx={{ color: 'inherit' }}>{weight}</TableCell>
                            {floors.map((floor, i) => (
                                <TableCell key={i} sx={{ color: 'inherit' }} align={i === floors.length - 1 ? 'right' : 'left'}>
                                    {bringData[floor] * (index + 1)}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Bring