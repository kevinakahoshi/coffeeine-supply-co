import React from 'react';

function ProductListItem(props) {
  const image = props.product.image;
  const name = props.product.name;
  const price = (props.product.price / 100).toFixed(2);
  const shortDescription = props.product.shortDescription;
  const setView = props.setView;
  return (
    <div className="col-md-4 d-flex align-items-stretch p-0">
      <div className="card mb-4 pointer item-card" onClick={() => {
        setView('details', { productId: props.product.productId });
      }}>
        <img src={image} alt="" className="card-img-top object-fit-card"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-black-50">{`$${price}`}</p>
          <p className="card-text">{shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
