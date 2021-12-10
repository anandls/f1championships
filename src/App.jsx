import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListWorldChampions from "./views/ListWorldChampions";
import DisplayWinners from "./views/DisplayWinners";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ListWorldChampions} />
          <Route
            path="/winners/:season/:worldchampion"
            component={DisplayWinners}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
