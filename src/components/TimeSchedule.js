import React from 'react';
import { Grid } from '@mui/material';
import DataTableTime from './DataTableTime';
import { gql, useQuery } from '@apollo/client';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from '@mui/material';
import { useState } from 'react';

function TimeSchedule() {
  const [date, setDate] = useState('2019-06-11');

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

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {/* <DayTableTime loading={loading} error={error} uniqueDate={uniqueDate} /> */}
        <TableContainer component={Paper} sx={tableStyling}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={headerStyling} scope="header">
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={rowStyle}>
              {uniqueDate.map((date) => {
                return (
                  <TableRow key={date}>
                    <TableCell>
                      <Button
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          border: '1px solid black',
                        }}
                        onClick={handleCellClick}
                      >
                        {date}
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={10}>
        <DataTableTime date={date} />
      </Grid>
    </Grid>
  );
}

const headerStyling = {
  backgroundColor: '#3c4c5c',
  color: 'white',
  fontWeight: 'bold',
};

const tableStyling = {
  maxHeight: '600px',
  width: '90%',
  margin: 'auto',
  marginTop: '2rem',
};

const rowStyle = {
  '& tr:nth-of-type(2n+1)': {
    backgroundColor: '#2196f3',
  },
};

export default TimeSchedule;
