import React, { useState } from 'react';
import { calculateWinner } from '../winnerHelper';
import Square from './Square';
import History from './History';
import StatusMsg from './StatusMsg';

const Board = () => {
  const NEW_GAME = [{ board: Array(9).fill(null), isXnext: false }];
  const [history, setHistory] = useState(NEW_GAME);
  // const [isXnext, setisXnext] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  // console.log(board);

  const { winner, winningSquares } = calculateWinner(current.board);

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
    const isWinningSquare = winningSquares.includes(position);
    return (
      <Square
        value={current.board[position]}
        onClick={() => {
          handleSquareClick(position);
        }}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <>
      <StatusMsg winner={winner} current={current} />
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
      <button
        type="button"
        onClick={() => onNewGame()}
        style={{ marginTop: '20px', padding: '5px' }}
      >
        Start New Game
      </button>
      <History moveTo={moveTo} history={history} currentMove={currentMove} />
    </>
  );
};

export default Board;
