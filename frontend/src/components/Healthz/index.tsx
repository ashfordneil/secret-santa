import React from 'react';
import { useAsync } from 'react-async-hook';

import { healthz } from 'network/Healthz';

export const Healthz: React.FC = () => {
  const state = useAsync(healthz, []);

  switch (state.status) {
    case 'not-requested':
      return null;
    case 'loading':
      return <p>Loading a response from the API</p>
    case 'success':
      return <p>{state.result}</p>
    case 'error':
      console.warn(state.error);
      return <p>An error occurred fetching from the API</p>
  }
};
