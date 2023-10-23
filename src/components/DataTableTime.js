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

function DataTableTime() {
  const GET_TIME = gql`
    query GetRounds {
      time_program_entry(
        where: {
          competition_id: { _eq: "4aaaf2e3-9026-404c-a2b9-fad19f5e37c9" }
        }
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

  console.log('this is data: ', data);
  return (
    <TableContainer component={Paper} sx={tableStyling}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
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
          {data.time_program_entry.map((round) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error : {error.message}</p>;

            if (round.start_time.substring(0, 10) === '2019-06-28') {
              return (
                <TableRow key={round.id}>
                  <TableCell>{round.start_time.substring(0, 16)}</TableCell>
                  <TableCell>{round.name}</TableCell>
                  <TableCell>{round.round?.event?.number}</TableCell>
                  <TableCell>{round.round?.status}</TableCell>
                  {/*<TableCell>{row.email}</TableCell> */}
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

const tableData = [
  {
    id: 1,
    first_name: 'Regan',
    last_name: 'Goff',
    email: 'rgoff0@imageshack.us',
    gender: 'Male',
    ip_address: '165.128.34.198',
  },
  {
    id: 2,
    first_name: 'Gloria',
    last_name: 'Sandeman',
    email: 'gsandeman1@barnesandnoble.com',
    gender: 'Female',
    ip_address: '48.249.171.117',
  },
  {
    id: 3,
    first_name: 'Dorice',
    last_name: 'Audas',
    email: 'daudas2@nhs.uk',
    gender: 'Female',
    ip_address: '91.106.54.156',
  },
  {
    id: 4,
    first_name: 'Meredith',
    last_name: 'Makeswell',
    email: 'mmakeswell3@github.io',
    gender: 'Male',
    ip_address: '21.3.27.170',
  },
  {
    id: 5,
    first_name: 'Walton',
    last_name: 'Riggott',
    email: 'wriggott4@businessweek.com',
    gender: 'Male',
    ip_address: '213.112.172.140',
  },
  {
    id: 6,
    first_name: 'Fabian',
    last_name: 'Pennino',
    email: 'fpennino5@tumblr.com',
    gender: 'Male',
    ip_address: '29.103.102.27',
  },
  {
    id: 7,
    first_name: 'Adrien',
    last_name: 'Rispen',
    email: 'arispen6@i2i.jp',
    gender: 'Male',
    ip_address: '29.63.171.72',
  },
  {
    id: 8,
    first_name: 'Felicdad',
    last_name: "O'Leary",
    email: 'foleary7@slashdot.org',
    gender: 'Female',
    ip_address: '4.247.191.28',
  },
  {
    id: 9,
    first_name: 'Farra',
    last_name: 'Cosstick',
    email: 'fcosstick8@theatlantic.com',
    gender: 'Female',
    ip_address: '179.57.102.70',
  },
  {
    id: 10,
    first_name: 'Estrellita',
    last_name: 'Gerretsen',
    email: 'egerretsen9@ted.com',
    gender: 'Female',
    ip_address: '78.36.3.34',
  },
];

export default DataTableTime;
