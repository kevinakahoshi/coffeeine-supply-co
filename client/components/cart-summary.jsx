import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const itemTotal = props.calculateTotal();
  if (props.cartItems.length === 0) {
    return (
      <div className="container py-5">
        <div className="mb-3">
          <a href="#" className="mb-3" onClick={() => {
            props.setView('catalog', {});
          }}><i className="fas fa-chevron-circle-left"></i> Back to Catalog</a>
        </div>
        <h1>My Cart</h1>
        <h3>There are no items in your cart</h3>
      </div>
    );
  } else {
    return (
      <div className="container py-5">
        <div className="mb-3">
          <a href="#" className="mb-3" onClick={() => {
            props.setView('catalog', {});
          }}><i className="fas fa-chevron-circle-left"></i> Back to Catalog</a>
        </div>
        <h1>My Cart</h1>
        {
          props.cartItems.map(product =>
            <CartSummaryItem product={product} key={product.id} removeFromCart={props.removeFromCart} />
          )
        }
        <div className="d-md-flex justify-content-between">
          <h3 className="md-my-auto text-black-50">Item Total: ${itemTotal}</h3>
          <button className="btn btn-primary my-auto" onClick={() => {
            props.setView('checkout', {});
          }}>Proceed to Checkout</button>
        </div>
      </div>
    );
  }

}

export default CartSummary;
