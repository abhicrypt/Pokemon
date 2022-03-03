import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskA from "./components/TaskA/TaskA";
import TaskB from "./TaskB/TaskB";
import TaskC from "./TaskC/TaskC";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <br/>
          <br/>
          <Switch>
            <Route path="/TaskA" component={TaskA} />
            <Route path="/TaskC" component={TaskC} />
            <Route path="/TaskB" component={TaskB} /> 
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
