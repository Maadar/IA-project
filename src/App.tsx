import React from 'react';
import {Decrement, Increment} from './redux/pioneers/pioneers.actions';
import {addHuman} from './redux/human_factory/human_factory.actions';
import {useDispatch, useSelector} from 'react-redux';
import {PioneersTypes, StoreType} from "./types/human.types";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const pioneers: PioneersTypes = useSelector((state: StoreType) => state.pioneers);

  return (
    <div>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(addHuman())}>Add New Human</button>
      <h1>Start</h1>
      <p>{pioneers.adam.name}</p>
    </div>
  );
};

export default App;
