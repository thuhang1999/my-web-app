import { useSearchParams, useParams } from "react-router-dom";

export const withParams = (Component) => {
  const Wrapper = (props) => {
    const [params, setParams] = useSearchParams();
    const eParams = useParams();

    return <Component params={params} eParams={eParams} {...props} />;
  };

  return Wrapper;
};
