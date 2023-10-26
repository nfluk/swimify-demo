import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Divider,
} from '@mui/material';

function DataTableEvent({ data, gender }) {
  const arrayToSort = [...data.events];
  const sortedByDistance = arrayToSort.sort(
    (a, b) => parseInt(a.name) - parseInt(b.name)
  );

  return (
    <TableContainer component={Paper} sx={tableStyling}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={headerStyling} scope="header">
              <p
                className="b underline ba br2 w3 tc ma1 pa1 bg-white"
                style={{ color: '#3c4c5c' }}
              >
                {gender}
              </p>
              <p>Event Number</p>
            </TableCell>
            <TableCell sx={headerStyling} scope="header">
              <p>Event Name</p>
            </TableCell>
            <TableCell sx={headerStyling} scope="header">
              <p>Rounds</p>
            </TableCell>
            <TableCell sx={headerStyling} scope="header">
              <p className="tc">Status</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={rowStyle}>
          {sortedByDistance.map((event) => {
            if (event.name.includes(gender)) {
              if (event.rounds.length > 1) {
                return (
                  <TableRow key={event.id}>
                    <TableCell>{event.number}</TableCell>
                    <TableCell>{event.name}</TableCell>
                    <TableCell>
                      {event.rounds.map((name) => (
                        <div>
                          <p>{name.name}</p>
                        </div>
                      ))}
                    </TableCell>
                    <TableCell>
                      {event.rounds.map((status) => (
                        <div>
                          {event.status === 3 ? (
                            <p className="b ba tc w4 bg-red br3 white center">
                              Unofficial
                            </p>
                          ) : (
                            <p className="b ba tc w4 bg-green br3 white center">
                              Official
                            </p>
                          )}
                        </div>
                      ))}
                    </TableCell>
                  </TableRow>
                );
              } else {
                return (
                  <TableRow key={event.id}>
                    <TableCell>{event.number}</TableCell>
                    <TableCell>{event.name}</TableCell>
                    <TableCell>{event.rounds[0].name}</TableCell>
                    <TableCell>
                      {event.rounds[0].status === 3 ? (
                        <p className="b ba tc w4 bg-red br3 white center">
                          Unofficial
                        </p>
                      ) : (
                        <p className="b ba tc w4 bg-green br3 white center">
                          Official
                        </p>
                      )}
                    </TableCell>
                  </TableRow>
                );
              }
            }
          })}
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
