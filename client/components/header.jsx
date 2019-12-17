import React from 'react';

function Header(props) {
  const name = props.name;
  const itemCount = props.cartItems.length;
  const cartCallback = props.setView;
  return (
    <div className="bg-dark mb-5 p-3">
      <div className="container">
        <h5 className="text-light d-inline-block m-0"><i className="fas fa-mug-hot" /> {name}</h5>
        <p className="text-light d-inline-block float-right m-0 pointer" onClick={() => {
          cartCallback('cart', {});
        }}>{itemCount} Items <i className="fas fa-shopping-cart"></i></p>
      </div>
    </div>
  );
}

export default Header;
