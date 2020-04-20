import React from "react";
import { Link, Route } from "react-router-dom";

import Users from "./containers/Users";
import asyncComponent from "./hoc/asyncComponents";

const asyncPizza = asyncComponent(() => {
  return import("./containers/Pizza");
});

const App = () => {
  return (
    <div>
      <div>
        <Link to='/'>Users</Link> |<Link to='/pizza'>Pizza</Link>
      </div>
      <div>
        <Route path='/' exact component={Users} />
        <Route path='/pizza' component={asyncPizza} />
      </div>
    </div>
  );
};

export default App;
