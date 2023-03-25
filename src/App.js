import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/signin">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      {/* Add any other routes or pages here */}
    </Switch>
  </Router>
  );
}

export default App;
