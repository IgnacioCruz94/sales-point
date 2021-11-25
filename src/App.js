import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "./views/ProductList";
import Header  from './views/header';
import Footer from "./views/Footer"
import Home from './views/Home';
import NavBar from './views/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={ProductList} />
    </Switch>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
