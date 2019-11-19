import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 1,
      resultObj: null
    };
  }

  componentDidMount() {
    const request = `/api/products?productId=${this.state.product}`;
    const initObj = {
      method: 'GET'
    };
    fetch(request, initObj)
      .then(response => { return response.json(); })
      .then(result => {
        this.setState({ resultObj: result[0] });
      });
  }

  render() {
    return (
      <div className="container my-5">
        <div className="container py-3 bg-white border rounded shadow-sm" id="product-details">
          <div className="mb-3">
            <a href="#" className="mb-3"><i className="fas fa-chevron-circle-left"></i> Back to Catalog</a>
          </div>
          <div className="row">
            <div className="col-md-5">
              <img src="/images/shake-weight.jpg" alt="" className="w-100" />
            </div>
            <div className="col-md-7">
              <h3>Product Name</h3>
              <h4 className="text-black-50">$Product Price</h4>
              <p>Product Short Description</p>
            </div>
          </div>
          <div className="col-md-12">
            <p>Product Long Description</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
