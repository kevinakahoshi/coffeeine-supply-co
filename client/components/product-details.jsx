import React from 'react';
import AddModal from './add-modal';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const request = `/api/products?productId=${this.props.id.productId}`;
    const initObj = {
      method: 'GET'
    };
    fetch(request, initObj)
      .then(response => { return response.json(); })
      .then(result => { this.setState({ product: result[0] }); })
      .catch(error => console.error('There was an error', error.message));
  }

  render() {
    if (this.state.product === null) {
      return null;
    }
    return (
      <div className="container py-5">
        <div className="container py-3 bg-white border rounded shadow-sm" id="product-details">
          <div className="mb-3">
            <a href="#" className="mb-3" onClick={() => {
              this.props.setView('catalog', {});
            }}><i className="fas fa-chevron-circle-left"></i> Back to Catalog</a>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <img src={this.state.product.image} alt="" className="w-100 object-fit-details" />
            </div>
            <div className="col-md-7">
              <h3>{this.state.product.name}</h3>
              <h4 className="text-black-50">{`$${(this.state.product.price / 100).toFixed(2)}`}</h4>
              <p>{this.state.product.shortDescription}</p>
              <button className="btn btn-primary" onClick={() => {
                this.props.sendToCart(this.state.product.productId, '+');
                this.toggleModal();
              }}>Add to Cart</button>
            </div>
          </div>
          <div>
            <p>{this.state.product.longDescription}</p>
          </div>
        </div>
        <AddModal showModal={this.state.showModal}
          setView={this.props.setView}
          toggleModal={this.toggleModal}
          product={this.state.product} />
      </div>
    );
  }
}

export default ProductDetails;
