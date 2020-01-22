import React from 'react';

function OrderConfirmation(props) {
  if (props.confirmationPage.length === 0) {
    props.setView('catalog', {});
  } else {
    const cartOverview = props.confirmationPage.map(product => {
      return (
        <div className="border rounded bg-white p-3 mb-3 d-flex slide-in" key={product.id}>
          <div className="col-4 p-0 mr-3">
            <img className="image-fluid slide-in" src={product.image} />
          </div>
          <div className="my-auto">
            <h3 className="slide-in">{product.name}</h3>
            <h6 className="slide-in">${(product.price / 100).toFixed(2)}</h6>
            <small className="text-muted slide-in">Quantity: {product.quantity}</small>
          </div>
        </div>
      );
    });

    return (
      <div className="container py-5">
        <h1 className="slide-in">Thank you for your order!</h1>
        <h3 className="slide-in">Your Order:</h3>
        <div>
          {cartOverview}
          <button className="btn text-white primary my-auto slide-in" onClick={() => {
            props.setView('catalog', {});
          }}>Continue Shopping</button>
        </div>
      </div>
    );
  }
}

export default OrderConfirmation;
