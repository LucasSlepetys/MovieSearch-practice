import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return <div>This item cannot be loaded... {error.message}</div>;
};

export default Error;
