import React from 'react';
import { Grid } from '@mui/material';
import DataTableTime from './DataTableTime';
import DayTableTime from './DayTableTime';
import { gql } from '@apollo/client';

function TimeSchedule() {
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

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <DayTableTime GET_TIME={GET_TIME} />
      </Grid>
      <Grid item xs={10}>
        <DataTableTime />
      </Grid>
    </Grid>
  );
}

export default TimeSchedule;
