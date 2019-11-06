import React from 'react';
import ReactDOM from 'react-dom';

let whichVersion = '';

if (process.env.mode === 'standalone') {
  whichVersion = 'This is a stand alone app';
}

if (process.env.mode === 'single-spa') {
  whichVersion = 'This is a micro-app';
}

const App = () => <div>{whichVersion}</div>;

ReactDOM.render(<App />, document.getElementById('app'));
