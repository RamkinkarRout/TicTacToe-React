import React from 'react';

// const message = winner
// ? `Winner is ${winner}`
// : `Next player is ${current.isXnext ? 'O' : 'X'}`;

const StatusMsg = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXnext ? 'O' : 'X'}`}
      {!winner && noMovesLeft && 'X and O tied'}
    </h2>
  );
};

export default StatusMsg;
