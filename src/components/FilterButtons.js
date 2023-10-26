import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

function FilterButtons({ handleCellClick, data }) {
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

export default FilterButtons;
