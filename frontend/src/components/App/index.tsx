import React from 'react';

import { Heading } from 'atoms/Heading';
import { Healthz } from 'components/Healthz';
import { Login } from 'components/Login';

import './component.css';
import './global.css';

export const App: React.FC = () => {
  return (
    <main className="App">
      <Heading>Merry Christmas</Heading>
      <Login/>
      <div className="App__spacer"/>
      <Healthz/>
    </main>
  );
};