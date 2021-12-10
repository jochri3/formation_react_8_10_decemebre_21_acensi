import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector<any>((state) => state.contacts);
  console.log(state);
  return <h1>Welcome</h1>;
};

export default Home;
