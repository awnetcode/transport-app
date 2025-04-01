import React from 'react'
import { Box } from '@mui/material';

import Info from './pages/Info';
import MainPage from './pages/MainPage';
import TransportTable from './pages/TransportTable';
import Bring from './pages/Bring';
import WeightTable from './pages/WeightTable';

const MainContent = ({content}) => {
    let pageContent;
    switch(content){
        case 'main':
            pageContent = <MainPage/>;
            break;
        case 'transport':
            pageContent = <TransportTable/>;
            break;
        case 'bring':
            pageContent = <Bring />;
            break;
        case 'info':
            pageContent = <Info />;
            break;
        case 'weight':
            pageContent = <WeightTable />;
            break;

    default: pageContent = <MainPage/>;
    }
  return (
    <Box sx={{
        width:{lg:'70%', sm:'100%'},
        
    }}>
        {pageContent}
    </Box>
  )
}

export default MainContent;