import React from 'react';

function RemoveModal(props) {
  if (props.cartItem) {
    return (
      <div className={`position-fixed h-100 w-100 ${props.showModal.displayNone ? 'd-none' : 'd-flex'} overlay ${props.showModal.show ? 'fade-in' : 'fade-out'}`}>
        <div className="m-auto p-3">
          <div className={`bg-white rounded p-3 modal-message ${props.showModal.show ? 'slide-in' : 'slide-out'}`}>
            <h5 className="text-center slide-in">{props.cartItem.name}</h5>
            <div>
              <img src={props.cartItem.image} className={`w-75 d-block m-auto ${props.showModal.show ? 'slide-in' : 'slide-out'}`} />
            </div>
            <p className="text-center slide-in">Are you sure you want to remove this from your cart?</p>
            <div className="btn-group w-100 slide-in">
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
      </div>
    );
  } else {
    return null;
  }
}

export default RemoveModal;
