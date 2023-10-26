import React from 'react';
import { Grid } from '@mui/material';
import DataTableTime from './DataTableTime';
import FilterButtons from './FilterButtons';

function TimeSchedule({
  uniqueDate,
  handleCellClick,
  date,
  loading,
  error,
  data,
}) {
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
