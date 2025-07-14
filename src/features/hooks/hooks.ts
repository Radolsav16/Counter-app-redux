import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatach = useDispatch.withTypes<AppDispatch>();