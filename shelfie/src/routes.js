import React from "react";
import { Switch, Route } from "react-router-dom";

import Shelfs from "./components/Shelfs/Shelfs";
import Bins from "./components/Bins/Bins";
import Bin from "./components/Bin/Bin";
import CreateBin from "./components/CreateBin/CreateBin";

export default (
  <Switch>
    <Route exact path="/" component={Shelfs} />
    <Route path="/bins/:id" component={Bins} />
    <Route path="/create/:id" component={CreateBin} />
    <Route path="/bin/:id" component={Bin} />
  </Switch>
);
