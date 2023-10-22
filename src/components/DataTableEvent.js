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
            <TableCell sx={headerStyling} scope="header">
              Event Number
            </TableCell>
            <TableCell sx={headerStyling} scope="header">
              Event Name
            </TableCell>
            <TableCell sx={headerStyling} scope="header">
              Rounds
            </TableCell>
          </TableRow>
        </TableHead>
        <DataTableBody />
      </Table>
    </TableContainer>
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

export default DataTableEvent;
