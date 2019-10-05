import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Default from "./default";

export default function router() {
    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Default} />
                </Switch>
            </App>
        </Router>
    );
};