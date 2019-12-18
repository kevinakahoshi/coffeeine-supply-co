import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    const request = '/api/products';
    const initObj = {
      method: 'GET'
    };
    fetch(request, initObj)
      .then(response => { return response.json(); })
      .then(data => { this.setState({ products: data }); })
      .catch(error => { console.error('There was an error:', error.message); });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <>
        <div className="catalog-hero d-flex">
          <div className="container m-auto">
            <h1 className="text-center text-white">Coffeine Supply Co</h1>
            <h3 className="text-center text-white">A coffee depot for kindred souls.</h3>
          </div>
        </div>
        <div className="container py-5">
          <div className="d-flex card-deck">
            {
              this.state.products.map(product =>
                <ProductListItem
                  key={product.productId}
                  product={product} setView={this.props.setView} />
              )
            }
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
