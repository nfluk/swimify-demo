import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import DataTableBody from './DataTableBody';

function DataTableTime() {
  return (
    <TableContainer component={Paper} sx={tableStyling}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell scope="header">Start Time</TableCell>
            <TableCell scope="header">Time Program Name</TableCell>
            <TableCell scope="header">Event Number</TableCell>
            <TableCell scope="header">Round Status</TableCell>
          </TableRow>
        </TableHead>
        <DataTableBody />
      </Table>
    </TableContainer>
  );
}

const tableStyling = {
  maxHeight: '600px',
  width: '90%',
  margin: 'auto',
  marginTop: '2rem',
};

export default DataTableTime;
