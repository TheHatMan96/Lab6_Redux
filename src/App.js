import React, { Component } from "react";
import "./App.css";
import SampleComponent from "./components/SampleComponent";
import { Provider as ReduxProvider } from "react-redux";
import  {Route,Link, BrowserRouter as Router, Switch} from "react-router-dom";
import configureStore from "./modules/store";
import Home from "./components/Home"
import ProjectCodeName from "./components/ProjectCodeName";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
   <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/project-code-name" component={ProjectCodeName}/>
    </Switch>
    <br></br>
    <Link to="/project-code-name">Click me to see some projects code names</Link>
  </Router>
);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;