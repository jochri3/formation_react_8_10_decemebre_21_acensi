// Welcome
interface IWelcome {
  title: string;
  message: string;
}

const Welcome: React.FC<IWelcome> = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </>
  );
};

export default Welcome;
