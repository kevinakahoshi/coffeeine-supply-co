import React from 'react';

function CartSummaryItem(props) {
  const name = props.product.name;
  const price = (props.product.price / 100).toFixed(2);
  const image = props.product.image;
  const description = props.product.shortDescription;
  return (
    <div className="container mb-3">
      <div className="row border bg-white shadow-sm rounded p-3 position-relative">
        <i className="far fa-times-circle cancel-button position-absolute"></i>
        <div className="col-md-4">
          <img src={image} alt="" className="object-fit-card" />
        </div>
        <div className="col-md-8 m-auto">
          <h3>{name}</h3>
          <h4 className="text-black-50">{`$${price}`}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
