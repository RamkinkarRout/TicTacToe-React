import React from 'react';
const Square = props => {
  const { value, onClick } = props;
  //   console.log(value);
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
