import React from 'react';

function AddModal(props) {
  let startsWithVowel = null;

  if (props.product.name[0].toLowerCase() === 'a' || props.product.name[0].toLowerCase() === 'e' || props.product.name[0].toLowerCase() === 'i' || props.product.name[0].toLowerCase() === 'o' || props.product.name[0].toLowerCase() === 'u') {
    startsWithVowel = 'n';
  }

  if (props.showModal) {
    return (
      <div className="position-fixed h-100 w-100 d-flex overlay fade-in">
        <div className="m-auto p-3">
          <div className="bg-white rounded p-3 modal-message">
            <div className="d-flex">
              <i className="far fa-times-circle cancel-button ml-auto"
                onClick={props.toggleModal} />
            </div>
            <h5 className="text-center">New Item Added</h5>
            <p className="text-center">You have added a{startsWithVowel} {props.product.name} to your cart.</p>
            <div className="btn-group w-100">
              <button className="btn btn-secondary w-50"
                onClick={() => props.setView('catalog', {})}>Continue Shopping</button>
              <button className="btn text-white primary w-50"
                onClick={() => props.setView('cart', {})}>View Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default AddModal;
