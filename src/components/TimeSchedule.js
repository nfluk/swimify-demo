import React from 'react';
import DataTableTime from './DataTableTime';

function TimeSchedule({ getTime }) {
  return (
    <>
      <DataTableTime getTime={getTime} />
    </>
  );
}

export default TimeSchedule;
