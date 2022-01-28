import React from 'react';

const History = ({ moveTo, history, currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
              }}
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'Start The Game' : `Go to Move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
