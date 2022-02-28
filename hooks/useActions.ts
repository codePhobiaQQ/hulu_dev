import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {makeStore, rootReducer} from "../redux/store";
import {appReducer} from "../redux/slices/AppSlice";

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(appReducer.actions, dispatch)
}
