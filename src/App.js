import "./App.css";
import ProductList from "./components/ProductList.js";
import CartContextProvider from "./Context/CartContext";
import CartList from "./components/CartList.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Link to="/cart">Cart</Link>
          <Link to="/">Product List</Link>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/cart" component={CartList} />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
