import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import AddProduct from './Component/AddProduct/AddProduct';
import Admin from './Component/Admin/Admin';
import Login from './Component/Login/Login';
import { createContext, useState, useEffect } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Orders from './Component/Orders/Orders';
import ManageProduct from './Component/ManageProduct/ManageProduct';
import Footer from './Component/Footer/Footer';

export const UserContext = createContext({});

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      const timing = setTimeout(() => {
          setLoading(false);
      }, 3000);

      return () => clearTimeout(timing);
  }, []);

  if (loading) {
      return (
        <div className="loading">
          <div class="spinner-border text-danger w-25" role="status">
          <span class="visually-hidden "></span>
          </div>
        </div>
      );
  }

  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router className="App App-body">
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/manageProduct">
            <ManageProduct/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
