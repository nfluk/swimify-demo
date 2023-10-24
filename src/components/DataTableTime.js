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
import { gql, useQuery } from '@apollo/client';

function DataTableTime({ date }) {
  const GET_TIME = gql`
    query GetRounds {
      time_program_entry(
        where: {
          competition_id: { _eq: "4aaaf2e3-9026-404c-a2b9-fad19f5e37c9" }
        }
        order_by: { start_time: asc }
      ) {
        id
        round {
          status
          event {
            number
          }
        }
        name
        start_time
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_TIME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <TableContainer component={Paper} sx={tableStyling}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={headerStyling} scope="header">
              Date
            </TableCell>
            <TableCell sx={headerStyling} scope="header">
              Start Time
            </TableCell>
            <TableCell sx={headerStyling} scope="header">
              Time Program Entry Name
            </TableCell>
            <TableCell sx={headerStyling} scope="header">
              Event Number
            </TableCell>
            <TableCell sx={headerStyling} scope="header">
              Round Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={rowStyle}>
          {data.time_program_entry.map((row) => {
            if (row.start_time.substring(0, 10) === date && row.round?.status) {
              const eventStatus =
                row.round?.status === 3 ? 'Unofficial' : 'Official';
              return (
                <TableRow key={row.id}>
                  <TableCell>
                    <p className="b ">{date}</p>
                  </TableCell>
                  <TableCell>
                    <p className="b underline">{`${row.start_time.substring(
                      11,
                      16
                    )}`}</p>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.round?.event?.number}</TableCell>
                  <TableCell>{eventStatus}</TableCell>
                </TableRow>
              );
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

export default DataTableTime;
