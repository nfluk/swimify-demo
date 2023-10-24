import { Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TimeSchedule from './TimeSchedule';
import ByEvent from './ByEvent';

function Tabs({ value, value2, handleChange }) {
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
          <TimeSchedule />
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h6" sx={tabPanelStyle}>
            By Event
          </Typography>
          <ByEvent />
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
