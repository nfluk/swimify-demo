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
// import { gql, useQuery } from '@apollo/client';
// import { useQuery } from '@apollo/client';

function DayTableTime({ loading, error, uniqueDate }) {
  //   const GET_TIME = gql`
  //     query GetRounds {
  //       time_program_entry(
  //         where: {
  //           competition_id: { _eq: "4aaaf2e3-9026-404c-a2b9-fad19f5e37c9" }
  //         }
  //         order_by: { start_time: asc }
  //       ) {
  //         id
  //         round {
  //           status
  //           event {
  //             number
  //           }
  //         }
  //         name
  //         start_time
  //       }
  //     }
  //   `;

  // const { loading, error, data } = useQuery(GET_TIME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  // console.log('this is data TIME: ', data.time_program_entry);

  // const dateArray = data.time_program_entry
  //   .map((day) => day.start_time.substring(0, 10))
  //   .filter((date) => date !== '0001-01-01');

  // const uniqueDate = Array.from(new Set(dateArray));

  return (
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
                  <button>{date}</button>
                </TableCell>
              </TableRow>
            );
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

export default DayTableTime;
