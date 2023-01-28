import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICounterModalsState {
  count: number;
  changeTime: number;
}

const initialState: ICounterModalsState = {
  count: 0,
  changeTime: new Date().getTime(),
};

export const counterModalSlice = createSlice({
  name: 'counterModal', // 命名空间，在调用action的时候会默认的设置为action的前缀
  initialState,
  // 这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
  reducers: {
    setCounter: (state: ICounterModalsState, action: PayloadAction<number>) => {
      state.count = action.payload; //action.payload是传入的参数
      state.changeTime = new Date().getTime();
    },
    add1Counter: (state: ICounterModalsState) => {
      state.count += 1;
      state.changeTime = new Date().getTime();
    },
    sub1Counter: (state: ICounterModalsState) => {
      state.count -= 1;
      state.changeTime = new Date().getTime();
    },
  },
});

// 导出actions
export const { setCounter, add1Counter, sub1Counter } = counterModalSlice.actions;
// 导出reducer，在创建store时使用到
export default counterModalSlice.reducer;
