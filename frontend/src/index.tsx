import React from 'react';
import ReactDOM from 'react-dom';
import { useAsync } from 'react-async-hook';

const root = document.querySelector('#root');
if (root === null) {
  throw new Error('Unable to find root to attach to');
}

const App: React.FC = () => {
  const state = useAsync(async () => {
    const result = await fetch('/api/healthz');
    if (!result.ok) {
      throw new Error(`Received HTTP ${result.status} from health check`);
    }

    return await result.text();
  }, []);

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
}

ReactDOM.render(<App />, root);