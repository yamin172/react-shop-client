import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import AddProduct from './Component/AddProduct/AddProduct';

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/addProduct">
          <AddProduct/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
