import { useContext } from "react";
import { store } from "src/stores/AppStore";

export const withContext = (Component) => {
  const Wrapper = (props) => {
    const { state, dispatch } = useContext(store);
    return <Component state={state} dispatch={dispatch} {...props} />;
  };

  return Wrapper;
};
