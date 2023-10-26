import { useState } from 'react';
import { Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TimeSchedule from '../components/TimeSchedule';
import ByEvent from '../components/ByEvent';
import { gql, useQuery } from '@apollo/client';

function Tabs({ value, handleChange, distances }) {
  const [date, setDate] = useState('2019-06-11');
  const [distance, setDistance] = useState('');

  const GET_TIME = gql`
    query GetRounds {
      time_program_entry(
        where: {
          competition_id: { _eq: "4aaaf2e3-9026-404c-a2b9-fad19f5e37c9" }
        }
        order_by: { start_time: asc }
      ) {
        id
        round {
          status
          event {
            number
          }
        }
        name
        start_time
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_TIME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const dateArray = data.time_program_entry
    .map((day) => day.start_time.substring(0, 10))
    .filter((date) => date !== '0001-01-01');

  const uniqueDate = Array.from(new Set(dateArray));

  const handleCellClick = (e) => {
    console.log(e.target.textContent);
    setDate(e.target.textContent);
  };

  const handleDistanceClick = (e) => {
    console.log(e.target.textContent);
    setDistance(e.target.textContent);
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
          <Typography variant="h6" sx={tabPanelStyle}>
            Time Schedule
          </Typography>
          <TimeSchedule
            uniqueDate={uniqueDate}
            handleCellClick={handleCellClick}
            date={date}
            loading={loading}
            error={error}
            data={data}
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
