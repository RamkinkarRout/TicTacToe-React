import React, { useState } from 'react';
import { calculateWinner } from '../winnerHelper';
import Square from './Square';
import History from './History';

const Board = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXnext: false },
  ]);
  const [isXnext, setisXnext] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  // console.log(board);

  const winner = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXnext ? 'O' : 'X'}`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXnext ? 'O' : 'X';
        }
        return square;
      });

      return prev.concat({ board: newBoard, isXnext: !last.isXnext });
    });
    setCurrentMove(prev => prev + 1);
  };
  const renderSquare = position => {
    return (
      <Square
        value={current.board[position]}
        onClick={() => {
          handleSquareClick(position);
        }}
      />
    );
  };

  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    <>
      <h2>{message}</h2>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <History moveTo={moveTo} history={history} currentMove={currentMove} />
    </>
  );
};

export default Board;
