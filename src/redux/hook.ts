import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useAppSelecotor = useSelector.withTypes<RootState>()
 export const useAppDispatch = () => useDispatch<AppDispatch>()