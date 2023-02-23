import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
export function AppRoutes() {
  return (
    <Switch>
      <Route path="/bgcolor/:colorname" children={<BackgroundColorChanger />} />
      <Route path="/calculator" children={<Calculator />} />
      <Route path="/" children={<Index />} />
    </Switch>
  );
}
