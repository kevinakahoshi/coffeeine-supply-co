import React from 'react';

function IntroModal(props) {
  if (props.showIntroModal) {
    return (
      <div className="position-fixed h-100 w-100 d-flex overlay">
        <div className="m-auto p-3">
          <div className="bg-white rounded p-3 modal-message">
            <h5 className="text-center">Welcome to Coffeine Supply Co</h5>
            <div className="d-flex">
            </div>
            <p className="text-center">Coffeine Supply Co is a LAMP stack content management app that was created strictly for demonstration purposes.  By clicking the button below, you accept that no purchases will be made, no payment processing will be done, and that actual personal information should not be used in checkout, such as real names, addresses, or credit card numbers.</p>
            <div className="btn-group w-100">
              <button className="btn btn-danger w-100"
                onClick={() => props.toggleIntroModal()}>Accept</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default IntroModal;
