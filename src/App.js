import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Motivacao from "./components/Motivacao";
import Sobre from "./components/Sobre";
import Gallery from "./components/Gallery";
import Contato from "./components/Contato";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/motivacao" />} />
            <Route path="/motivacao" component={Motivacao} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/galeria" component={Gallery} />
            <Route path="/contato" component={Contato} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
