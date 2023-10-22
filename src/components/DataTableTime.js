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
            <TableCell sx={headerStyling} scope="header">
              Start Time
            </TableCell>
            <TableCell sx={headerStyling} scope="header">
              Time Program Name
            </TableCell>
            <TableCell sx={headerStyling} scope="header">
              Event Number
            </TableCell>
            <TableCell sx={headerStyling} scope="header">
              Round Status
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

export default DataTableTime;
