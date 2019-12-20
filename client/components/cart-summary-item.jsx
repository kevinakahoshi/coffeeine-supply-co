import React from 'react';

function CartSummaryItem(props) {
  const name = props.product.name;
  const price = (props.product.price / 100).toFixed(2);
  const image = props.product.image;
  const description = props.product.shortDescription;

  return (
    <div className="container mb-3">
      <div className="row border bg-white shadow-sm rounded p-3 position-relative">
        <div className="d-flex justify-content-between w-100">
          <h3>{name}</h3>
          <i className="far fa-times-circle cancel-button"
            onClick={() => {
              props.toggleModal();
              props.productToRemove(props.product);
            }} />
        </div>
        <div className="col-md-4">
          <img src={image} alt="" className="object-fit-card" />
        </div>
        <div className="col-md-8 m-auto">
          <h4 className="text-black-50">{`$${price}`}</h4>
          <p>{description}</p>
          <div className="d-flex">
            <h5 className="my-auto">Quantity: </h5>
            <div className="d-flex btn-group mx-3 my-auto border border-dark rounded">
              <div className="d-flex">
                <button className="btn btn-light rounded-right"
                  onClick={() => {
                    if (props.product.quantity > 1) {
                      props.sendToCart(props.product.productId, '-');
                    } else {
                      props.productToRemove(props.product);
                      props.toggleModal();
                    }
                  }}>
                  <i className="fas fa-minus m-auto" />
                </button>
              </div>
              <div className="d-flex px-3">
                <h5 className="m-auto">{props.product.quantity}</h5>
              </div>
              <div className="d-flex">
                <button className="btn btn-light rounded-left"
                  onClick={() => { props.sendToCart(props.product.productId, '+'); }}>
                  <i className="fas fa-plus m-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
