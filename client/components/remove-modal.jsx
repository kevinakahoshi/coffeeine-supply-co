import React from 'react';

function RemoveModal(props) {
  if (props.showModal) {
    return (
      <div className="position-fixed h-100 w-100 d-flex overlay">
        <div className="bg-white rounded border p-3 modal-message">
          <h5>{props.cartItem.name}</h5>
          <p>Are you sure you want to remove this from your cart?</p>
          <div className="btn-group w-100">
            <button className="btn btn-secondary w-50"
              onClick={props.toggleModal}>Cancel</button>
            <button className="btn btn-danger w-50"
              onClick={() => {
                props.removeFromCart(props.cartItem.id);
                props.toggleModal();
              }}>Remove</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default RemoveModal;
