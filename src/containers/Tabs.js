// import { useState } from 'react';
import { Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TimeSchedule from '../components/TimeSchedule';
import ByEvent from '../components/ByEvent';

function Tabs({
  value,
  handleChange,
  handleCellClick,
  handleDistanceClick,
  distances,
  date,
  distance,
}) {
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
          <Typography variant="h6" sx={tabPanelStyle}>
            Time Schedule
          </Typography>
          <TimeSchedule
            // uniqueDate={uniqueDate}
            handleCellClick={handleCellClick}
            date={date}
            // loading={loading}
            // error={error}
            // data={data}
          />
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h6" sx={tabPanelStyle}>
            By Event
          </Typography>
          <ByEvent
            distance={distance}
            distances={distances}
            handleDistanceClick={handleDistanceClick}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

const tabPanelStyle = {
  fontWeight: 'bold',
  color: '#3c4c5c',
};

export default Tabs;
