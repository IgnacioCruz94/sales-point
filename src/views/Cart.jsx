import Table from '../components/Table';
import ModalCart from '../components/Modal';
import './Cart.css';
function Cart() {
  return (
    <div>
        <h1>Cart Page</h1>
        <section>
            <Table/>
        </section>
        <ModalCart/>
      
    </div>
  );
}
export default Cart;