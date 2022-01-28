import React from 'react';

// const message = winner
// ? `Winner is ${winner}`
// : `Next player is ${current.isXnext ? 'O' : 'X'}`;

const StatusMsg = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'O' ? 'text-orange' : 'text-green'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next Player is{' '}
          <span className={current.isXnext ? 'text-orange' : 'text-green'}>
            {current.isXnext ? 'O' : 'X'}{' '}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span>tied
        </>
      )}
    </div>
  );
};

export default StatusMsg;
