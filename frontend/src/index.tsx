import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components/App';

const root = document.querySelector('#root');
if (root === null) {
  throw new Error('Unable to find root to attach to');
}

ReactDOM.render(<App />, root);