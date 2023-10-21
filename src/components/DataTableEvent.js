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

function DataTableEvent() {
  return (
    <TableContainer component={Paper} sx={tableStyling}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell scope="header">Event Number</TableCell>
            <TableCell scope="header">Event Name</TableCell>
            <TableCell scope="header">Rounds</TableCell>
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

export default DataTableEvent;
