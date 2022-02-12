import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
