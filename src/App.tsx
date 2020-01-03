import React, {useEffect, useState} from 'react';
import {incrementPioneersAge, killPioneers} from './redux/pioneers/pioneers.actions';
import {addHuman, increaseHumansAge} from './redux/human_factory/human_factory.actions';
import {increaseYear} from './redux/year/year.actions';
import {useDispatch, useSelector} from 'react-redux';
import {HumanProps, HumansTypes, PioneersTypes, StoreType} from "./types/human.types";
import {IYear} from "./redux/year/year.types";
import {canPioneersCross} from "./utils/cross";


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
      cross(humans, pioneers);
      dispatch(increaseYear());
      dispatch(incrementPioneersAge());
      dispatch(increaseHumansAge());
      cross(humans, pioneers);
      determinePioneersDeath(pioneers.adam, pioneers.ewa);
      // dispatch(killPioneers())
    }, delay * 1000);
    return () => clearTimeout(timerID);
  }, [year, delay]);

  const tryKill = () => {
    const score = Math.floor(Math.random() * 10 + 1);
    console.log(score);
    return score >= 8 && score <= 10;
  };

  const determinePioneersDeath = (adam: HumanProps, ewa: HumanProps) => {
    if (adam.age >= adam.dieBetween[0] && adam.age <= adam.dieBetween[1]) {
      const shouldDie = tryKill();
      if (shouldDie) {
        dispatch(killPioneers('adam'));
      }
    }

    if (ewa.age >= ewa.dieBetween[0] && ewa.age <= ewa.dieBetween[1]) {
      const shouldDie = tryKill();
      if (shouldDie) {
        dispatch(killPioneers('ewa'));
      }
    }
  };

  const handleOnChangeDelay = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isNaN(parseFloat(e.target.value)) && parseFloat(e.target.value) >= 0) {
      setDelay(parseFloat(e.target.value));
    }
  };

  const cross = (humans: HumansTypes, pioneers: PioneersTypes): void => {
    if (canPioneersCross(pioneers.adam, pioneers.ewa)) {
      dispatch(addHuman());
    }
  };

  return (
    <div>
      <button onClick={() => dispatch(addHuman())}>Add New Human</button>
      <input type="number" name="delay" value={delay} onChange={(e) => handleOnChangeDelay(e)} />

      <h1>Start</h1>

      <p>Current Year: {year}</p>
      <p>{pioneers.adam && pioneers.adam.name} {pioneers.adam && pioneers.adam.age}</p>
      <p>{pioneers.ewa && pioneers.ewa.name} {pioneers.ewa && pioneers.ewa.age}</p>

      {humans.map((human: HumanProps) => (
        <h2 onClick={() => dispatch(increaseHumansAge())} key={human.id}>{human.name} {human.age}</h2>
      ))}
    </div>
  );
};

export default App;
