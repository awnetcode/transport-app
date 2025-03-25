import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',
      position: 'absolute',
      top: 0,

     }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
        sx={{
          color: '#A5ABAF'
        }}
        >
          <Tab label="Główna" {...a11yProps(0)} />
          <Tab label="Transport" {...a11yProps(1)} />
          <Tab label="Wniesienie" {...a11yProps(2)} />
          <Tab label="Info" {...a11yProps(3)} />
          <Tab label="Waga" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        main
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        delivery
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        bring
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        info
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        weight
      </CustomTabPanel>
    </Box>
  );
}