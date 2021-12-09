import { useParams } from "react-router-dom";

interface RouteParam {
  id: string;
}

export const ShowContact = () => {
  const { id } = useParams<RouteParam>();
  return <h1>show contact : {id}</h1>;
};
