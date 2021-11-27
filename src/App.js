import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from "./views/Products";
import Header  from './components/header';
import Footer from "./components/Footer"
import Home from './views/Home';
import NavBar from './components/NavBar';
import Invoices from "./views/Invoices";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/invoices" component={Invoices} />
    </Switch>
    <Footer />
    </BrowserRouter>
  );
}
export default App;
