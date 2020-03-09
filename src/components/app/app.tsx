import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalState from 'state';
import Main from 'pages/main';

const App: React.FC = () => {
  return (
    <GlobalState.Provider>
      <div data-testid="app">
        <Router>
          <Switch>
            <Route path="/">
              <Main />
            </Route>
            {/* <Route component={Error} />*/}
          </Switch>
        </Router>
      </div>
    </GlobalState.Provider>
  );
};

export default App;
