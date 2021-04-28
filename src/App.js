import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CustomerPage from "./components/CustomerPage";
import Warehouse from "./components/Warehouse";
import Items from "./components/Items";
import Vehicles from "./components/Vehicles";
import Orders from "./components/Orders";
import ItemList from "./components/ItemList";
import VehiclesList from "./components/VehiclesList";
import CustomerList from "./components/CustomerList";

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/customers' component={CustomerPage} />
          <Route exact path='/warehouse' component={Warehouse} />
          <Route exact path='/items' component={Items} />
          <Route exact path='/vehicles' component={Vehicles} />
          <Route exact path='/orders' component={Orders} />
          <Route exact path='/item-list' component={ItemList} />
          <Route exact path='/vehicle-list' component={VehiclesList} />
          <Route exact path='/customer-list' component={CustomerList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
