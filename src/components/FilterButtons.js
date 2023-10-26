import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

function FilterButtons({ handleCellClick, data }) {
  console.log('this is the data: ', data);
  return (
    <Grid container gap={2}>
      <Grid>
        <Button onClick={handleCellClick} variant="outlined">
          {data}
        </Button>
      </Grid>
    </Grid>
  );
}

const distances = [
  '50m',
  '100m',
  '200m',
  '400m',
  '800m',
  '1500m',
  'All',
  'hello',
];

export default FilterButtons;
