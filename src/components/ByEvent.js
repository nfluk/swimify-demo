import React from 'react';
import DataTableEvent from './DataTableEvent';

function ByEvent({ getEvents }) {
  return (
    <div>
      <DataTableEvent getEvents={getEvents} />
    </div>
  );
}

export default ByEvent;
