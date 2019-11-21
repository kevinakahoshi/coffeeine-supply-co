import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const itemsArray = props.cartItems;
  let itemTotal = 0;

  for (let cartIndex = 0; cartIndex < itemsArray.length; cartIndex++) {
    itemTotal = itemTotal + itemsArray[cartIndex].price;
  }
  itemTotal = (itemTotal / 100).toFixed(2);

  if (itemsArray.length === 0) {
    return (
      <div className="container">
        <div className="mb-3">
          <a href="#" className="mb-3" onClick={() => {
            this.props.setView('catalog', {});
          }}><i className="fas fa-chevron-circle-left"></i> Back to Catalog</a>
        </div>
        <h1>My Cart</h1>
        <h3>There are no items in your cart</h3>
      </div>
    );
  } else {
    return (
      <div className="container mb-5">
        <div className="mb-3">
          <a href="#" className="mb-3" onClick={() => {
            props.setView('catalog', {});
          }}><i className="fas fa-chevron-circle-left"></i> Back to Catalog</a>
        </div>
        <h1>My Cart</h1>
        {
          itemsArray.map(product =>
            <CartSummaryItem product={product} key={product.id} />
          )
        }
        <h3>Item Total: ${itemTotal}</h3>
      </div>
    );
  }

}

export default CartSummary;
