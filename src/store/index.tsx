import { configureStore } from '@reduxjs/toolkit';

import counterModal from './slices/counterModal';

// configureStore创建一个redux数据
const store = configureStore({
  reducer: {
    counterModal, //template
    // more,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
