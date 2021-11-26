import './App.css';
<<<<<<< HEAD
/* import Cart from './views/Cart'; */
/* import Products from './views/Products'; */
import Invoices from './views/Invoices';
function App() {
  return (
    <div className="App">
      <Invoices/>
      
    </div>
=======
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
>>>>>>> bd16789f1a5ffe5506323e550b0b6f13b4d77583
  );
}
export default App;
