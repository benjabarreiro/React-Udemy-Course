import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome" component={Welcome} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:productId" component={ProductDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
