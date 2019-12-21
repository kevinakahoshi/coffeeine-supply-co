import React from 'react';

function Header(props) {
  const name = props.name;
  let itemCount = 0;
  const cartCallback = props.setView;

  for (let index = 0; index < props.cartItems.length; index++) {
    itemCount += props.cartItems[index].quantity;
  }

  return (
    <div className="bg-dark py-3 sticky-top">
      <div className="container">
        <h5 className="text-light d-inline-block m-0 logo" onClick={() => {
          cartCallback('catalog', {});
        }}>
          <i className="fas fa-mug-hot" /> {name}</h5>
        <p className="text-light d-inline-block float-right m-0 pointer" onClick={() => {
          cartCallback('cart', {});
        }}>{itemCount} Item{itemCount === 1 ? null : 's'} <i className="fas fa-shopping-cart"></i></p>
      </div>
    </div>
  );
}

export default Header;
