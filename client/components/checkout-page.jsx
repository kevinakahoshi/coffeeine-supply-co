import React from 'react';
import FormElement from './form-element';

function CheckoutPage(props) {
  const orderTotal = props.calculateTotal();

  const cartOverview = props.cartItems.map(product => {
    return (
      <div className="border rounded bg-white p-1 m-3 d-flex" key={product.id}>
        <div className="col-4 p-0 mr-3">
          <img className="image-fluid" src={product.image} />
        </div>
        <div className="my-auto">
          <h6>{product.name}</h6>
          <small className="text-muted">Quantity: {product.quantity}</small>
        </div>
      </div>
    );
  });

  return (
    <div className="container py-5">
      <div className="mb-3">
        <a href="#" onClick={() => {
          props.setView('catalog', {});
        }}><i className="fas fa-chevron-circle-left" /> Continue Shopping</a>
      </div>
      <h1 className="slide-in">My Cart</h1>
      <h3 className="text-black-50 mb-3 slide-in">Order Total: ${orderTotal}</h3>
      <div className="row">
        <div className="col-md-8 slide-in">
          <FormElement placeOrder={props.placeOrder}
            cartOverview={props.cartItems}
            setConfirmation={props.setConfirmation} />
        </div>
        <div className="col-md-4 d-md-block d-none">
          <div className="border rounded bg-light sticky-top product-column slide-in">
            {cartOverview}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
