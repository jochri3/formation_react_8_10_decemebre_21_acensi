import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/";
import {
  IndexContacts,
  CreateContact,
  EditContact,
  ShowContact,
} from "./pages/contacts";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact={true} path="/contacts" component={IndexContacts} />
          <Route exact path="/contacts/:id" component={ShowContact} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
