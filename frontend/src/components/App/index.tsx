import React from 'react';

import { Healthz } from 'components/Healthz';

import './component.css';
import './global.css';

export const App: React.FC = () => {
  return (
    <main className="App">
      <Healthz/>
    </main>
  );
};