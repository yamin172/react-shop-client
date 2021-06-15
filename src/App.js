import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import AddProduct from './Component/AddProduct/AddProduct';
import Admin from './Component/Admin/Admin';
import Login from './Component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Orders from './Component/Orders/Orders';
import ManageProduct from './Component/ManageProduct/ManageProduct';

export const UserContext = createContext({});

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

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
      </Router>
    </UserContext.Provider>
  );
}

export default App;
