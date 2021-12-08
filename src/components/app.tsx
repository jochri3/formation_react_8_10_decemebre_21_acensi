import Layout from "./layout";
import Welcome from "./welcome";

// App
const App: React.FC = () => {
  return (
    <Layout>
      <Welcome title="Welcome" message="I'm happy" />
      <Welcome title="C++" message="C++ is powerfull" />
      <Welcome title="Java" message="Java is robust" />
    </Layout>
  );
};

export default App;
