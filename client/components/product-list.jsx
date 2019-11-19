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
      <div className="row card-deck">
        {
          this.state.products.map(product =>
            <ProductListItem
              key={this.state.products.productId}
              product={product} />
          )
        }
      </div>
    );
  }
}

export default ProductList;
