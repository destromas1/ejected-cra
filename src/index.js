import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { HashRouter, Switch, Route} from "react-router-dom";

import { store } from "./core/store/store.config";
import SpeakerList from "./app/speakers/SpeakerList";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/speakers" component={SpeakerList} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
