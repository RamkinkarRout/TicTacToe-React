import React from 'react';
const Square = props => {
  const { value, onClick, isWinningSquare } = props;
  //   console.log(value);
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      style={{
        fontWeight: isWinningSquare ? 'bold' : 'normal',
      }}
    >
      {value}
    </button>
  );
};

export default Square;
