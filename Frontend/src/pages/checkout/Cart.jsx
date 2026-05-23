import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CartHeader from "../../components/cart/CartHeader";
import CartItems from "../../components/cart/CartItems";
import CartSummary from "../../components/cart/CartSummary";

const Cart = () => {
  return (
    <div>
      <Navbar />

      <CartHeader />
      
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-16">
        <CartItems />

        <CartSummary />        
      </div>

      <Footer />  
    </div>
  );
};

export default Cart;