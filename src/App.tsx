import React, {useEffect, useState} from 'react';
import {incrementPioneersAge} from './redux/pioneers/pioneers.actions';
import {addHuman, increaseAge} from './redux/human_factory/human_factory.actions';
import {increaseYear} from './redux/year/year.actions';
import {useDispatch, useSelector} from 'react-redux';
import {HumanProps, HumansTypes, PioneersTypes, StoreType} from "./types/human.types";
import {IYear} from "./redux/year/year.types";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const pioneers: PioneersTypes = useSelector((state: StoreType) => state.pioneers);
  const humans: HumansTypes = useSelector((state: StoreType) => state.humans);
  const year: IYear = useSelector((state: StoreType) => state.year);
  const [delay, setDelay] = useState(1);
  let timerID: NodeJS.Timeout;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timerID = setTimeout(() => {
      // dispatch(addHuman());
      // dispatch(increaseYear());
      // dispatch(incrementPionersAge());
    }, delay * 1000);
    return () => clearTimeout(timerID);
  }, [year, delay]);

  const handleOnChangeDelay = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isNaN(parseFloat(e.target.value)) && parseFloat(e.target.value) >= 0) {
      setDelay(parseFloat(e.target.value));
    }
  };

  return (
    <div>
      <button onClick={() => dispatch(addHuman())}>Add New Human</button>
      <input type="number" name="delay" value={delay} onChange={(e) => handleOnChangeDelay(e)} />

      <h1>Start</h1>

      <p>Current Year: {year}</p>
      <p>{pioneers.adam.name} {pioneers.adam.age}</p>
      <p>{pioneers.ewa.name} {pioneers.ewa.age}</p>

      {humans.map((human: HumanProps) => (
        <h2 onClick={() => dispatch(increaseAge(human.id))} key={human.id}>{human.name} {human.age}</h2>
      ))}
    </div>
  );
};

export default App;
