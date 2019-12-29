import React from 'react';
import {Decrement, Increment} from './redux/pioneers/pioneers.actions';
import {addHuman, increaseYear} from './redux/human_factory/human_factory.actions';
import {useDispatch, useSelector} from 'react-redux';
import {HumanProps, PioneersTypes, StoreType} from "./types/human.types";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const pioneers: PioneersTypes = useSelector((state: StoreType) => state.pioneers);
  // @ts-ignore
  const humans: HumanProps[] = useSelector((state: StoreType) => state.humans);

  return (
    <div>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(addHuman())}>Add New Human</button>
      <h1>Start</h1>
      <p>{pioneers.adam.name}</p>
      {humans.map((human) => (
        <h2 onClick={() => dispatch(increaseYear(human.id))} key={human.id}>{human.name} {human.age}</h2>
      ))}
    </div>
  );
};

export default App;
