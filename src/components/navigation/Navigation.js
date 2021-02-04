import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import {
  HomeScreen,
  ProfileScreen,
  NotFoundScreen,
  NewUserScreen,
  MessageFeedScreen,
} from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";

export const Navigation = () => (
  <div className="body">
    <BrowserRouter>
      <Switch>
        <ConnectedRoute
          exact
          path="/"
          redirectIfAuthenticated
          component={HomeScreen}
        />
        {/* /newuser isn't connected */}
        <ConnectedRoute exact path="/newuser" component={NewUserScreen} />
        <ConnectedRoute
          exact
          path="/messagefeed"
          component={MessageFeedScreen}
        />

        <ConnectedRoute
          exact
          isProtected
          path="/profiles/:username"
          component={ProfileScreen}
        />
        <ConnectedRoute path="*" component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  </div>
);
