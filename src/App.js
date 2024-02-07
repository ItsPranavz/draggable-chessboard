import React, { useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import Draggable from 'react-draggable';
import './styles.css';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  return (
    <div className='container'>
      <Draggable handle='.drag-handle'>
        <div className='chessboard-div'>
          <div className="drag-handle">
            <span className="drag-handle-icon">&#x2630;</span>
          </div>
          <Chessboard
            boardWidth={500} />
        </div>
      </Draggable>
      <p className='text'>
        Draggable Chessboard
      </p>
    </div>
  );
}

export default App;
