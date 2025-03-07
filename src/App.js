import { useState } from 'react';
function Square({value, onSquareClick}) {
  return(
   <button className="square" onClick={onSquareClick}>
  {value}
  </button>
  )
}


export default function Board() {
  const [xisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleCLick(i){
    const nextSquares = squares.slice();
    if (xisNext){
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXisNext(!xisNext);
  }
  return (
    <>
    <div className='board-row'>
      <Square value={squares[0]} onSquareClick={()=>handleCLick(0)} />
      <Square value={squares[1]} onSquareClick={()=>handleCLick(1)} />
      <Square value={squares[2]} onSquareClick={()=>handleCLick(2)} />
    </div>
    <div className='board-row'>
      <Square value={squares[3]} onSquareClick={()=>handleCLick(3)} />
      <Square value={squares[4]} onSquareClick={()=>handleCLick(4)} />
      <Square value={squares[5]} onSquareClick={()=>handleCLick(5)} />
    </div>
    <div className='board-row'>
      <Square value={squares[6]} onSquareClick={()=>handleCLick(6)} />
      <Square value={squares[7]} onSquareClick={()=>handleCLick(7)} />
      <Square value={squares[8]} onSquareClick={()=>handleCLick(8)} />
    </div>

  </>
  );

}
