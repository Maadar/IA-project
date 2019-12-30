import React from 'react';
import {Decrement, Increment} from './redux/pioneers/pioneers.actions';
import {addHuman, increaseAge} from './redux/human_factory/human_factory.actions';
import {increaseYear} from './redux/year/year.actions';
import {useDispatch, useSelector} from 'react-redux';
import {HumanProps, PioneersTypes, StoreType} from "./types/human.types";
import {IYear} from "./redux/year/year.types";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const pioneers: PioneersTypes = useSelector((state: StoreType) => state.pioneers);
  // @ts-ignore
  const humans: HumanProps[] = useSelector((state: StoreType) => state.humans);
  const year: IYear = useSelector((state: StoreType) => state.year);

  console.log(year);

  return (
    <div>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(addHuman())}>Add New Human</button>
      <button onClick={() => dispatch(increaseYear())}>Increase Year</button>
      <h1>Start</h1>
      <p>{pioneers.adam.name} {pioneers.adam.age}</p>
      <p>{pioneers.ewa.name} {pioneers.ewa.age}</p>
      {humans.map((human) => (
        <h2 onClick={() => dispatch(increaseAge(human.id))} key={human.id}>{human.name} {human.age}</h2>
      ))}
    </div>
  );
};

export default App;
