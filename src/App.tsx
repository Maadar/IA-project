import React from 'react';
import {Decrement, Increment} from './redux/pioneers/pioneers.actions';
import {useDispatch} from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <h1>Start</h1>
    </div>
  );
};

export default App;
