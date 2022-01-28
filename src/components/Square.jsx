import React from 'react';
const Square = props => {
  const { value, onClick, isWinningSquare } = props;
  //   console.log(value);
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{
        fontWeight: isWinningSquare ? 'bold' : 'normal',
      }}
    >
      {value}
    </button>
  );
};

export default Square;
