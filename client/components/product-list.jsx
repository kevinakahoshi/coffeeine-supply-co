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
    window.scrollTo(0, 0);
    this.getProducts();
  }

  render() {
    return (
      <>
        <div id="carousel-captions" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-captions" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-captions" data-slide-to="1"></li>
            <li data-target="#carousel-captions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="5000">
              <img src="./images/carousel-2.jpg" className="d-block w-100 carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block center-caption">
                <h5>Top Quality Coffee Supplies</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div className="carousel-item" data-interval="5000">
              <img src="./images/carousel-3.jpg" className="d-block w-100 carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block center-caption">
                <h5>Beans from Local Roasters</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="carousel-item" data-interval="5000">
              <img src="./images/hero-beans.jpg" className="d-block w-100 carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block center-caption">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carousel-captions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel-captions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
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
