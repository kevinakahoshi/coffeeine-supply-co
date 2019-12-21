import React from 'react';
import FormElement from './form-element';

function CheckoutPage(props) {
  window.scrollTo(0, 0);
  const orderTotal = props.calculateTotal();

  return (
    <div className="container py-5">
      <div className="mb-3">
        <a href="#" onClick={() => {
          props.setView('catalog', {});
        }}><i className="fas fa-chevron-circle-left" /> Continue Shopping</a>
      </div>
      <h1>My Cart</h1>
      <h3 className="text-black-50 mb-3">Order Total: ${orderTotal}</h3>
      <div className="row">
        <div className="col-md-8">
          <FormElement placeOrder={props.placeOrder} />
        </div>
        <div className="col-md-4 border rounded bg-light"></div>
      </div>
    </div>
  );
}

export default CheckoutPage;
