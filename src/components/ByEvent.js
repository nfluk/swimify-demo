import React from 'react';
import DataTableEvent from './DataTableEvent';
import { gql, useQuery } from '@apollo/client';
import { Grid } from '@mui/material';

function ByEvent() {
  const GET_EVENTS = gql`
    query GetEvents {
      events(
        where: {
          competition_id: { _eq: "4aaaf2e3-9026-404c-a2b9-fad19f5e37c9" }
        }
        order_by: { name: asc }
      ) {
        id
        name
        number
        rounds {
          status
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Grid container spacing={1}>
      <DataTableEvent loading={loading} error={error} data={data} />
      <DataTableEvent loading={loading} error={error} data={data} />
    </Grid>
  );
}

export default ByEvent;
