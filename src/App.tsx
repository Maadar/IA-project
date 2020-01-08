import React, {useEffect, useState} from 'react';
import {
  incrementAdamAge,
  incrementEwaAge,
  killAdam,
  killEwa
} from './redux/pioneers/pioneers.actions';
import {addHuman, increaseHumansAge, killHuman} from './redux/human_factory/human_factory.actions';
import {increaseYear} from './redux/year/year.actions';
import {useDispatch, useSelector} from 'react-redux';
import {HumanProps, HumansTypes, PioneersTypes, StoreType} from "./types/human.types";
import {IYear} from "./redux/year/year.types";
import {canPioneersCross, tryCross} from "./utils/cross";
import {tryKill} from "./utils/helpers";

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
      dispatch(increaseYear());
      dispatch(increaseHumansAge());

      if (!pioneers.adam.isDead) {
        dispatch(incrementAdamAge());
      }
      if (!pioneers.ewa.isDead) {
        dispatch(incrementEwaAge());
      }

      cross(humans, pioneers);

      humans.forEach((human: HumanProps) => {
        if (!human.isDead && human.age >= human.startDying) {
          const shouldDie = tryKill();
          shouldDie && dispatch(killHuman(human.id));
        }
      });

      determinePioneersDeath(pioneers.adam, pioneers.ewa);
    }, delay * 1000);
    return () => clearTimeout(timerID);
  }, [year, delay]);

  const determinePioneersDeath = (adam: HumanProps, ewa: HumanProps) => {
    if (!adam.isDead && adam.age >= adam.startDying) {
      const shouldDie = tryKill();
      if (shouldDie) {
        dispatch(killAdam());
      }
    }

    console.log(!ewa.isDead && ewa.age >= ewa.startDying);
    if (!ewa.isDead && ewa.age >= ewa.startDying) {
      const shouldDie = tryKill();
      if (shouldDie) {
        dispatch(killEwa());
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
      tryCross() && dispatch(addHuman());
    }
  };

  return (
    <div>
      <button onClick={() => dispatch(addHuman())}>Add New Human</button>
      <input type="number" name="delay" value={delay} onChange={(e) => handleOnChangeDelay(e)} />

      <h1>Start</h1>

      <p>Current Year: {year}</p>
      <p>{pioneers.adam && pioneers.adam.name} {pioneers.adam && pioneers.adam.age} {pioneers.adam.startDying}</p>
      <p>{pioneers.ewa && pioneers.ewa.name} {pioneers.ewa && pioneers.ewa.age} {pioneers.ewa.startDying}</p>

      {humans.map((human: HumanProps, index: number) => !human.isDead && (
        <h2 onClick={() => dispatch(increaseHumansAge())} key={human.id}>{index + 1} {human.name} {human.age} {human.startDying}</h2>
      ))}
    </div>
  );
};

export default App;
