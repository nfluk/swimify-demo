import React, { useState } from 'react';
import { Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TimeSchedule from '../components/TimeSchedule';

function Tabs() {
  const [value, setValue] = useState('1');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList aria-label="tabs" onChange={handleChange} centered>
            <Tab label="Time Schedule" value="1"></Tab>
            <Tab label="By Event" value="2"></Tab>
          </TabList>
        </Box>
        <TabPanel value="1">
          <Typography>Time Schedule</Typography>
          <TimeSchedule />
        </TabPanel>
        <TabPanel value="2">By Event</TabPanel>
      </TabContext>
    </Box>
  );
}

export default Tabs;
