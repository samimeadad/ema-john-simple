import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';
import './App.css';

function App () {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route exact path='/shop'>
            <Shop></Shop>
          </Route>
          <Route exact path='/review'>
            <OrderReview></OrderReview>
          </Route>
          <Route exact path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;