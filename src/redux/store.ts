import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice.ts'
import taskReducer from './features/tasks/taskSlice.ts'
import { logger } from "./middleware/logger.ts";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo:taskReducer
  },
  middleware:(getDefaultMiddlewawre)=>getDefaultMiddlewawre().concat(logger)
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch