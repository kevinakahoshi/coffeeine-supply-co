import React from 'react';
import IntroModal from './intro-modal';

function Header(props) {
  const name = props.name;
  let itemCount = 0;

  for (let index = 0; index < props.cartItems.length; index++) {
    itemCount += props.cartItems[index].quantity;
  }

  return (
    <div className="background-dark py-3 sticky-top header">
      <div className="container">
        <h5 className="text-light d-inline-block m-0 logo" onClick={() => {
          if (props.currentView !== 'catalog') {
            props.setView('catalog', {});
          }
        }}>
          <i className="fas fa-mug-hot" /> {name}</h5>
        <p className="text-light d-inline-block float-right m-0 pointer" onClick={() => {
          if (props.currentView !== 'cart') {
            props.setView('cart', {});
          }
        }}>{itemCount} Item{itemCount === 1 ? null : 's'} <i className="fas fa-shopping-cart" />
        </p>
      </div>
      <IntroModal showIntroModal={props.showIntroModal}
        toggleIntroModal={props.toggleIntroModal} />
    </div>
  );
}

export default Header;
