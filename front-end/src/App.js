import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
// import Login from './pages/Login';

function App() {
  const { push, location: { pathname } } = useHistory();
  useEffect(() => {
    if (pathname === '/') {
      push('/home'); // login futuramente
    }
  }, [push, pathname]);

  return (
    <Switch>
      {/* <Route path="/login" component={ Login } /> */}
      <Route exact path="/home" component={ Home } />
      <Route path="/favorites" component={ Favorites } />
    </Switch>
  );
}

export default App;
