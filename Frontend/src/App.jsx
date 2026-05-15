import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <Product />
      <Shop />
      <Cart />
      <Contact />
    </div>
  );
}

export default App;