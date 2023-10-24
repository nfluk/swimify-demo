import React from 'react';
import { Grid } from '@mui/material';
import DataTableTime from './DataTableTime';
import DayTableTime from './DayTableTime';

function TimeSchedule() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <DayTableTime />
      </Grid>
      <Grid item xs={10}>
        <DataTableTime />
      </Grid>
    </Grid>
  );
}

export default TimeSchedule;
