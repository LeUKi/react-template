import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/store';
import { ICounterModalsState, add1Counter, sub1Counter } from '~/store/slices/counterModal';

import styles from './index.module.scss';

interface IAComponent {
  text: string;
}

const AComponent: React.FC<IAComponent> = ({ text }) => {
  const { count, changeTime } = useSelector<RootState, ICounterModalsState>(
    (state) => state.counterModal,
  );
  const dispatch = useDispatch();
  return (
    <div className={styles.div}>
      <div>{text}</div>
      <div>count:{count}</div>
      <div>changeTime:{new Date(changeTime).toString()}</div>
      <button
        onClick={() => {
          dispatch(add1Counter());
        }}
      >
        add 1
      </button>
      <button
        onClick={() => {
          dispatch(sub1Counter());
        }}
      >
        sub 1
      </button>
    </div>
  );
};

export default AComponent;
