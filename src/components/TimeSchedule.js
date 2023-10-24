import React from 'react';
import { Grid } from '@mui/material';
import DataTableTime from './DataTableTime';
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

function TimeSchedule({
  uniqueDate,
  handleCellClick,
  date,
  loading,
  error,
  data,
}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
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
