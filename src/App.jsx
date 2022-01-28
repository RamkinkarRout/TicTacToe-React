import React from 'react';
import Board from './components/Board';
import './style/root.style.scss';
const App = () => (
  <div className="app">
    <h1>
      TIC <span className="text-green">TAC</span> TOE{' '}
    </h1>
    <Board />
    <div className="bg-balls"></div>
  </div>
);
export default App;
