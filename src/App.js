import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Login />}/>
        <Route exact path="/home" render={() => <Home />}/>
        <Route exact path="/register" render={() => <Register />}/>
        <Route exact path="/about-us" render={() => <AboutUs />}/>
        <Route exact path="*" render={() => <NotFound />}/>
      </Switch>
    </Router>
  );
}

export default App;
