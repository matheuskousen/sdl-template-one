import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function Routes() {
  return (
    <BrowserRouter basename="/soundline">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contato" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
