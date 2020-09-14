import React from 'react';
import { AuthProvider } from './Auth';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Create from './Create';
import Home from './Home';

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/palettes' component={Home} />
        <PrivateRoute exact path='/palettes/create' component={Create} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
