import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

function DataTableEvent({ data }) {
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
            <TableCell sx={headerStyling} scope="header">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={rowStyle}>
          {data.events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.number}</TableCell>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.rounds[0].name}</TableCell>
              <TableCell>
                {event.rounds[0].status === 3 ? (
                  <p className="b ba tc w3 bg-red br3 white">Unofficial</p>
                ) : (
                  <p className="b ba tc w3 bg-green br3 white">Official</p>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
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

const rowStyle = {
  '& tr:nth-of-type(2n+1)': {
    backgroundColor: '#2196f3',
  },
};

export default DataTableEvent;
