import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';

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

  const [menuVisible, setMenuVisible] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',
      position: 'absolute',
      top: 0,
      mb:{lg:'32px', sm:'10px'},
      background:'var(--gunmetal)',
      zIndex:'5'
     }}>
      {menuVisible && (
      <MenuIcon sx={{
        fontSize:'3rem',
        position:'absolute',
        top:'10px',
        right:'10px',
        zIndex:'10',
        cursor:'pointer',
        display: { xs: 'block', sm: 'block', md: 'none' } 
      }}
      onClick={() => setMenuVisible(!menuVisible)}
      /> 
      )}
      <Box sx={{ borderBottom: 0, borderColor: 'inherit' }}>
        {(menuVisible === false || !isSmallScreen) && ( 
        <Tabs 
         orientation={isSmallScreen ? "vertical" : "horizontal"}
         value={value} onChange={handleChange} aria-label="basic tabs example"
         sx={{
          transition:'all .2s linear',
          boxShadow: isSmallScreen ? 5 : 0,
         }}
         >
          <Tab sx={{color: 'inherit'}} label="Główna" onClick={()=>{
            setContent('main');
            setMenuVisible(!menuVisible);
            }}/>
          <Tab sx={{color:'inherit'}} label="Transport" onClick={()=>{
            setContent('transport');
            setMenuVisible(!menuVisible);
            }}/>
          <Tab sx={{color:'inherit'}} label="Wniesienie" onClick={()=>{
            setContent('bring');
            setMenuVisible(!menuVisible);
            }}/>
          <Tab sx={{color:'inherit'}} label="Info" onClick={()=>{
            setContent('info');
            setMenuVisible(!menuVisible);
            }}/>
          <Tab sx={{color:'inherit'}} label="Waga" onClick={()=>{
            setContent('weight');
            setMenuVisible(!menuVisible);
            }}/>
        </Tabs>
        )}
      </Box>
    </Box>
  );
}