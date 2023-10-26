import React from 'react';
import DataTableEvent from './DataTableEvent';
import { gql, useQuery } from '@apollo/client';
import { Grid } from '@mui/material';
import FilterButtons from './FilterButtons';

function ByEvent({ distances, handleDistanceClick }) {
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
    <>
      <Grid container justifyContent="center">
        <Grid container justifyContent="center" gap={2}>
          {distances.map((distance) => {
            return (
              <FilterButtons
                key={distance}
                handleDistanceClick={handleDistanceClick}
                data={distance}
              />
            );
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <DataTableEvent
            loading={loading}
            error={error}
            data={data}
            gender={'Herrar'}
          />
        </Grid>
        <Grid item xs={6}>
          <DataTableEvent
            loading={loading}
            error={error}
            data={data}
            gender={'Damer'}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ByEvent;
