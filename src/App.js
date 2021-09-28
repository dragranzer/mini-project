import './App.css';
import Home from './UserPages/Home';
import Login from './UserPages/Login';
import Register from './UserPages/Register';
import AboutUs from './UserPages/AboutUs';
import NotFound from './UserPages/NotFound';
import LoginAdmin from './AdminPages/Login';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Login />}/>
        <Route exact path="/home" render={() => <Home />}/>
        <Route exact path="/register" render={() => <Register />}/>
        <Route exact path="/about-us" render={() => <AboutUs />}/>
        <Route exact path="/log-admin" render={() => <LoginAdmin />}/>
        <Route exact path="*" render={() => <NotFound />}/>
      </Switch>
    </Router>
  );
}

export default App;
