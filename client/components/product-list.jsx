import React from 'react';
import CatalogCarousel from './catalog-carousel';
import ProductListItem from './product-list-item';
import IntroModal from './intro-modal';

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
    window.scrollTo(0, 0);
    this.getProducts();
  }

  render() {
    return (
      <>
        <CatalogCarousel />
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
        <IntroModal showIntroModal={this.props.showIntroModal}
          toggleIntroModal={this.props.toggleIntroModal} />
      </>
    );
  }
}

export default ProductList;
