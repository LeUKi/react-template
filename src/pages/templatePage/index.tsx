import styles from './index.module.scss';
import TemplateComponent from '~/components/templateComponent';

import { useDispatch } from 'react-redux';
import { setCounter } from '~/store/slices/counterModal';

const Submitpage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <TemplateComponent text='hi' />
      <button
        onClick={() => {
          dispatch(setCounter(0));
        }}
      >
        set 0
      </button>
    </>
  );
};

export default Submitpage;
