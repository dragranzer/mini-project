import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Home from './UserPages/Home';
import Login from './UserPages/Login';
import Register from './UserPages/Register';
import AboutUs from './UserPages/AboutUs';
import NotFound from './UserPages/NotFound';
import LoginAdmin from './AdminPages/Login';
import Profile from './UserPages/Profile';
import HomeAdmin from './AdminPages/Home';
import InputAdmin from './AdminPages/Input';
import {store, persistor} from "./store/store";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Login />}/>
            <Route exact path="/home" render={() => <Home />}/>
            <Route exact path="/register" render={() => <Register />}/>
            <Route exact path="/about-us" render={() => <AboutUs />}/>
            <Route exact path="/profile" render={() => <Profile />}/>
            <Route exact path="/log-admin" render={() => <LoginAdmin />}/>
            <Route exact path="/home-admin" render={() => <HomeAdmin />}/>
            <Route exact path="/input" render={() => <InputAdmin />}/>
            <Route exact path="*" render={() => <NotFound />}/>
          </Switch>
        </Router>
     </PersistGate>
    </Provider>
  );
}

export default App;
