import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './Context/AuthProvider';
import Purchase from './Pages/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ProductDetails from './components/ProductDetails';
import NotFound from './Pages/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
// import Dashboard from './Pages/Dashboard/Dashboard';

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

            <Route path="/product/:id">
              <ProductDetails />
            </Route>
            <PrivateRoute path="/purchase/product/:id">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
