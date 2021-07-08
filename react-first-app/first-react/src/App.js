import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Btn = () => <button>123</button>;

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Navbar} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
