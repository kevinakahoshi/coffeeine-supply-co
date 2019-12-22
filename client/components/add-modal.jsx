import React from 'react';

function AddModal(props) {
  let startsWithVowel = null;

  if (props.product.name[0].toLowerCase() === 'a' || props.product.name[0].toLowerCase() === 'e' || props.product.name[0].toLowerCase() === 'i' || props.product.name[0].toLowerCase() === 'o' || props.product.name[0].toLowerCase() === 'u') {
    startsWithVowel = 'n';
  }

  if (props.showModal) {
    return (
      <div className="position-fixed h-100 w-100 d-flex overlay">
        <div className="m-auto p-3">
          <div className="bg-white rounded border p-3 modal-message">
            <h5 className="text-center">New Item Added</h5>
            <p className="text-center">You have added a{startsWithVowel} {props.product.name} to your cart.</p>
            <div className="btn-group w-100">
              <button className="btn btn-secondary w-50"
                onClick={props.toggleModal}>Close</button>
              <button className="btn btn-primary w-50"
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
