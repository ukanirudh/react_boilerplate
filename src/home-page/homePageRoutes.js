import React from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = () => <h1> HomePage </h1>;
const Gallery = () => <h1> Gallery </h1>;

const HomePageRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/gallery" component={Gallery} />
  </Switch>
);

export default HomePageRoutes;
