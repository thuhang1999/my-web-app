import { useSearchParams } from "react-router-dom";

export const withParams = (Component) => {
  const Wrapper = (props) => {
    const [params, setParams] = useSearchParams();

    return <Component params={params} {...props} />;
  };

  return Wrapper;
};
