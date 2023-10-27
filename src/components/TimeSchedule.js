import React from 'react';
import { Grid } from '@mui/material';
import { gql, useQuery } from '@apollo/client';
import DataTableTime from './DataTableTime';
import FilterButtons from './FilterButtons';

function TimeSchedule({ handleCellClick, date }) {
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
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid container justifyContent="center" gap={2}>
        {uniqueDate.map((date) => {
          return (
            <FilterButtons
              key={date}
              handleCellClick={handleCellClick}
              data={date}
            />
          );
        })}
      </Grid>
      <Grid item xs={10}>
        <DataTableTime
          date={date}
          loading={loading}
          error={error}
          data={data}
        />
      </Grid>
    </Grid>
  );
}

export default TimeSchedule;
