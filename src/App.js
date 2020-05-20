import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Cart from "./pages/cart";
import Photos from "./pages/photos";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
