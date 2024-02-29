import { todoReducer } from './tools/todoSlice';
import { userDataReducer } from "./tools/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    userDataReducer,
    todoReducer
  },
});

export type RootType = ReturnType<typeof store.getState>;

export type appDispach = typeof store.dispatch;

export const useAppDispach = () => useDispatch<appDispach>();

export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
