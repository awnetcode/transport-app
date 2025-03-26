import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



export default function BasicTabs({setContent}) {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',
      position: 'absolute',
      top: 0
     }}>
      <Box sx={{ borderBottom: 0, borderColor: 'inherit' }}>
        <Tabs 
         orientation={isSmallScreen ? "vertical" : "horizontal"}
         value={value} onChange={handleChange} aria-label="basic tabs example"
         >
          <Tab sx={{color: 'inherit'}} label="Główna" onClick={()=>setContent('main')}/>
          <Tab sx={{color:'inherit'}} label="Transport" onClick={()=>setContent('transport')}/>
          <Tab sx={{color:'inherit'}} label="Wniesienie" onClick={()=>setContent('bring')}/>
          <Tab sx={{color:'inherit'}} label="Info" onClick={()=>setContent('info')}/>
          <Tab sx={{color:'inherit'}} label="Waga" onClick={()=>setContent('weight')}/>
        </Tabs>
      </Box>
    </Box>
  );
}